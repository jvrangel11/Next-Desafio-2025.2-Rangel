import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const produtos = [
    {
      title: 'Camisa Esportiva Pro',
      price: 129.90,
      description: 'Camisa esportiva de alta performance',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Treino Elite',
      price: 149.90,
      description: 'Camisa para treino de alta intensidade',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Competição Premium',
      price: 179.90,
      description: 'Camisa oficial para competições',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Casual Sport',
      price: 99.90,
      description: 'Camisa casual para o dia a dia',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Performance Max',
      price: 159.90,
      description: 'Camisa com tecnologia de ponta',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Training Pro',
      price: 139.90,
      description: 'Camisa ideal para treinamentos',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Competidor Elite',
      price: 189.90,
      description: 'Camisa premium para competidores',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Sport Classic',
      price: 119.90,
      description: 'Camisa clássica esportiva',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Pro Series',
      price: 169.90,
      description: 'Camisa da série profissional',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Elite Performance',
      price: 199.90,
      description: 'Camisa top de linha para atletas',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Training Elite',
      price: 144.90,
      description: 'Camisa especial para treinos',
      imageUrl: '/assets/Camisa.png'
    },
    {
      title: 'Camisa Competition Pro',
      price: 184.90,
      description: 'Camisa profissional para competições',
      imageUrl: '/assets/Camisa.png'
    }
  ];

  for (const produto of produtos) {
    await prisma.product.create({
      data: produto
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });