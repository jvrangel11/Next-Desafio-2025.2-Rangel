import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const produtos = await prisma.product.findMany();
    console.log("Produtos encontrados:", produtos); // Debug
    return NextResponse.json(produtos);
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json({ error: "Erro ao buscar produtos" }, { status: 500 });
  }
}