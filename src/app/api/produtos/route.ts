import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '5');
    const skip = (page - 1) * limit;

    const [produtos, total] = await Promise.all([
      prisma.product.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc'
        }
      }),
      prisma.product.count()
    ]);

    return NextResponse.json({
      produtos,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar produtos" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const data = await req.json();
    const produto = await prisma.product.create({
      data: {
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        imageUrl: data.imageUrl
      }
    });
    return NextResponse.json(produto);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 });
  }
}


export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const produto = await prisma.product.update({
      where: {
        id: data.id
      },
      data: {
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        imageUrl: data.imageUrl
      }
    });
    return NextResponse.json(produto);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao atualizar produto" }, { status: 500 });
  }
}


export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    await prisma.product.delete({
      where: {
        id: data.id
      }
    });
    return NextResponse.json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao excluir produto" }, { status: 500 });
  }
}