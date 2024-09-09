import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const breakfast = await prisma.product.findMany({
    where: { categoryId: 2 },
    include: {
      items: true,
      ingredients: true,
    },
  });

  return NextResponse.json(breakfast);
}
