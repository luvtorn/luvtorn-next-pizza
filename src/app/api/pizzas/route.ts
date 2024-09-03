import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const pizzas = await prisma.product.findMany({
    where: { categoryId: 1 },
  });

  return NextResponse.json(pizzas);
}
