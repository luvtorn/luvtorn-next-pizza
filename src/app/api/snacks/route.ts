import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const snacks = await prisma.product.findMany({
    where: { categoryId: 3 },
    include: {
      items: true,
      ingredients: true,
    },
  });

  return NextResponse.json(snacks);
}
