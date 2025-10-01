"use server"
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getMaisVendidos() {
  try {
    console.log("Buscando produtos mais vendidos..."); // Debug
    const produtos = await prisma.product.findMany({
      take: 6,
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return {
      success: true,
      data: produtos
    };
  } catch (error) {
    console.error("Erro ao buscar produtos mais vendidos:", error);
    return {
      success: false,
      error: "Erro ao buscar produtos mais vendidos"
    };
  }
}

export async function getNovaColecao() {
  try {
    console.log("Buscando produtos da nova coleção..."); // Debug
    const produtos = await prisma.product.findMany({
      take: 12,
      skip: 6, // Pula os 6 primeiros que já foram usados em "Mais Vendidos"
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return {
      success: true,
      data: produtos
    };
  } catch (error) {
    console.error("Erro ao buscar produtos da nova coleção:", error);
    return {
      success: false,
      error: "Erro ao buscar produtos da nova coleção"
    };
  }
}

export async function getMVV() {
  try {
    const identities = await fetch("https://treinamentoapi.codejr.com.br/api/identities");
    const data = await identities.json();
    
    if (!identities.ok) {
      throw new Error("Failed to fetch data, Status: " + identities.status);
    }

    return {
      success: true,
      data: data.identities
    };
  } catch (error) {
    console.error("Erro ao buscar identidades:", error);
    return {
      success: false,
      error: "Erro ao buscar identidades"
    };
  }
}

export async function getProduto(id: number) {
  try {
    const produto = await prisma.product.findUnique({
      where: {
        id: id
      }
    });
    
    if (!produto) {
      throw new Error("Produto não encontrado");
    }

    return {
      success: true,
      data: produto
    };
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return {
      success: false,
      error: "Erro ao buscar produto"
    };
  }
}

export async function getAllProdutos(page: number = 1, limit: number = 12) {
  try {
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

    return {
      success: true,
      data: {
        produtos,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        total
      }
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      success: false,
      error: "Erro ao buscar produto"
    };
  }
}