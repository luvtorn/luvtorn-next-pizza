import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const cocktails = await prisma.product.findMany({
    where: { categoryId: 4 },
    include: {
      items: true,
      ingredients: true,
    },
  });

  return NextResponse.json(cocktails);
}
