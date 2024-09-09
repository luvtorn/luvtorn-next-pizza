import { ChooseProductModal } from "@/components/shared/choose-product-modal";
import { notFound } from "next/navigation";
import { prisma } from "../../../../../prisma/prisma-client";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) return notFound();

  return <ChooseProductModal product={product} />;
}
