import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";
import { pizzas } from "./pizzas";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(20, 60),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "John Doe",
        email: "1@1.com",
        password: hashSync("123", 10),
        role: "USER",
      },
      {
        fullName: "luvtorn",
        email: "2@2.com",
        password: hashSync("123", 10),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const {
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    pizza5,
    pizza6,
    pizza7,
    pizza8,
    pizza9,
    pizza10,
    pizza11,
    pizza12,
    pizza13,
    pizza14,
    pizza15,
    pizza16,
    pizza17,
    pizza18,
  } = await pizzas();

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza9.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza11.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza12.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza13.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza13.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza13.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza14.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza14.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza14.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza15.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza15.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza15.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza16.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza16.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza16.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza17.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza17.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza17.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza18.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza18.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza18.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: "123",
        totalAmount: 0,
      },
      {
        userId: 2,
        token: "1234",
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
