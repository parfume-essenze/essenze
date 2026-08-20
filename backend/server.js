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

// React app catch-all handler (SPA routing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
