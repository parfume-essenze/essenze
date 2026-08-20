const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const catalogData = [
  { name: 'Essense Aqua', article: 'ART-001', barcode: '200000000101', categoryName: 'Парфюмерия', price: 150000, costPrice: 80000, stock: 45 },
  { name: 'Oud Wood Intense', article: 'ART-002', barcode: '200000000102', categoryName: 'Парфюмерия', price: 250000, costPrice: 120000, stock: 12 },
  { name: 'Vanilla Dream', article: 'ART-003', barcode: '200000000103', categoryName: 'Ароматы для дома', price: 85000, costPrice: 40000, stock: 0 }
];

async function main() {
  console.log('Seeding database...');
  for (const item of catalogData) {
    let category = await prisma.category.findFirst({ where: { name: item.categoryName } });
    if (!category) {
      category = await prisma.category.create({ data: { name: item.categoryName } });
    }
    
    await prisma.product.create({
      data: {
        name: item.name,
        sku: item.article,
        barcode: item.barcode,
        price: item.price,
        costPrice: item.costPrice,
        stock: item.stock,
        categoryId: category.id
      }
    });
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
