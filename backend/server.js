const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));

// === CATEGORIES API ===

app.get('/api/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

app.post('/api/categories', async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: { name }
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
});

// === PRODUCTS API ===

app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { name, sku, barcode, price, costPrice, stock, categoryId } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        sku,
        barcode,
        price: parseFloat(price),
        costPrice: costPrice ? parseFloat(costPrice) : null,
        stock: parseInt(stock) || 0,
        categoryId: categoryId ? parseInt(categoryId) : null
      },
      include: { category: true }
    });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id: parseInt(id) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// === ORDERS API ===

app.post('/api/orders', async (req, res) => {
  try {
    const { totalAmount, paymentType, items } = req.body;
    
    // Create order and deduct stock in a transaction
    const result = await prisma.$transaction(async (prisma) => {
      const order = await prisma.order.create({
        data: {
          totalAmount: parseFloat(totalAmount),
          paymentType,
          orderItems: {
            create: items.map(item => ({
              productId: item.id,
              quantity: item.qty,
              price: item.price
            }))
          }
        }
      });

      for (const item of items) {
        await prisma.product.update({
          where: { id: item.id },
          data: {
            stock: {
              decrement: item.qty
            }
          }
        });
      }

      return order;
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process order' });
  }
});

// === CLIENTS API ===

app.get('/api/clients', async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

app.post('/api/clients', async (req, res) => {
  try {
    const { firstName, lastName, phone, gender, birthday } = req.body;
    const client = await prisma.client.create({
      data: {
        firstName,
        lastName,
        phone,
        gender,
        birthday
      }
    });
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create client' });
  }
});

// === REPORTS & FINANCE API ===

app.get('/api/reports/sales', async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: { product: true }
        }
      }
    });

    let totalRevenue = 0;
    let totalCost = 0;

    orders.forEach(order => {
      totalRevenue += order.totalAmount;
      order.orderItems.forEach(item => {
        const cost = item.product.costPrice || 0;
        totalCost += (cost * item.quantity);
      });
    });

    res.json({
      totalRevenue,
      totalProfit: totalRevenue - totalCost,
      orderCount: orders.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

app.get('/api/shifts/current', async (req, res) => {
  try {
    const shift = await prisma.cashShift.findFirst({
      where: { status: 'OPEN' },
      orderBy: { openedAt: 'desc' }
    });
    res.json(shift || null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shift' });
  }
});

app.post('/api/shifts', async (req, res) => {
  try {
    const { action, balance } = req.body;
    if (action === 'OPEN') {
      const shift = await prisma.cashShift.create({
        data: { startBalance: balance }
      });
      res.json(shift);
    } else if (action === 'CLOSE') {
      const shift = await prisma.cashShift.findFirst({ where: { status: 'OPEN' } });
      if (shift) {
        const closed = await prisma.cashShift.update({
          where: { id: shift.id },
          data: { status: 'CLOSED', closedAt: new Date(), endBalance: balance }
        });
        res.json(closed);
      } else {
        res.status(404).json({ error: 'No open shift' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to process shift' });
  }
});

// React app catch-all handler (SPA routing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
