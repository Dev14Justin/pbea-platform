const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@pbea.com' },
    update: {},
    create: {
      email: 'admin@pbea.com',
      name: 'Admin PBEA',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  const formation1 = await prisma.product.create({
    data: {
      title: 'Maîtriser la Culture du Maïs au Togo',
      description: 'Une formation complète pour optimiser vos rendements de maïs avec des techniques modernes.',
      price: 15000,
      type: 'FORMATION',
    },
  });

  const guide1 = await prisma.product.create({
    data: {
      title: 'Guide des Engrais Bio',
      description: 'Découvrez comment fabriquer et utiliser des engrais naturels.',
      price: 5000,
      type: 'GUIDE',
    },
  });

  const post1 = await prisma.post.create({
    data: {
      title: 'Bienvenue sur PBEA',
      content: 'Nous sommes ravis de lancer cette plateforme pour les agriculteurs togolais.',
      published: true,
      authorId: admin.id,
    },
  });

  console.log({ admin, formation1, guide1, post1 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
