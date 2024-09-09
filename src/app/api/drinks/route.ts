import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const drinks = await prisma.product.findMany({
    where: { categoryId: 5 },
    include: {
      items: true,
      ingredients: true,
    },
  });

  return NextResponse.json(drinks);
}
