import { ingredients } from "./constants";
import { prisma } from "./prisma-client";

export const pizzas = async () => {
  const pizza1 = await prisma.product.create({
    data: {
      name: "Pepperoni Fresh",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(7, 9),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Cheese",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 3),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Chorizo Fresh",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(8, 10),
      },
    },
  });

  const pizza4 = await prisma.product.create({
    data: {
      name: "Pizza Kebab",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 6),
      },
    },
  });

  const pizza5 = await prisma.product.create({
    data: {
      name: "Pizza Bear 👶",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC404FFDD72F7A1A4002B430B57AE.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(12, 14),
      },
    },
  });

  const pizza6 = await prisma.product.create({
    data: {
      name: "BBQ Bacon and Cheese",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC4064CE6CAE6A17B32E3D6F9228B.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 3),
      },
    },
  });

  const pizza7 = await prisma.product.create({
    data: {
      name: "Sweet Pizza",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC405E80D6BE9A378C0C3078DFF4B.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(13, 15),
      },
    },
  });

  const pizza8 = await prisma.product.create({
    data: {
      name: "Ham and cheese",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(6, 8),
      },
    },
  });

  const pizza9 = await prisma.product.create({
    data: {
      name: "Pepperoni Fresh",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE8739E55F5BCE89E33C950E9F9698.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(7, 9),
      },
    },
  });

  const pizza10 = await prisma.product.create({
    data: {
      name: "Creamy mushroom 🌱",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC402222096ED995052422450F685.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 7),
      },
    },
  });

  const pizza11 = await prisma.product.create({
    data: {
      name: "Four Seasons",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC406246D8163915996B91E043453.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 10),
      },
    },
  });

  const pizza12 = await prisma.product.create({
    data: {
      name: "Hawaiian",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE873B1B3E8567874EC62045B17F86.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(6, 12),
      },
    },
  });

  const pizza13 = await prisma.product.create({
    data: {
      name: "Italian",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEE2400B610809A76066EC21F8C841.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(9, 13),
      },
    },
  });

  const pizza14 = await prisma.product.create({
    data: {
      name: "VegeMix 🌱",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC402C437E02DB8AFE46BF0FFDE87.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 14),
      },
    },
  });

  const pizza15 = await prisma.product.create({
    data: {
      name: "Country pizza",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE87464C2BF76CBD2D76B7567BA5A0.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 10),
      },
    },
  });

  const pizza16 = await prisma.product.create({
    data: {
      name: "Bacon Ranch",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EEC40564EA9D3FAD36C65F58910D7A.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 6),
      },
    },
  });

  const pizza17 = await prisma.product.create({
    data: {
      name: "Chicken Ranch",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE874226D636E68C91E09A7F256458.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 8),
      },
    },
  });

  const pizza18 = await prisma.product.create({
    data: {
      name: "Four cheeses 🌱",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 4),
      },
    },
  });

  return {
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
  };
};
