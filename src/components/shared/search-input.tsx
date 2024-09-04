"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";

const SearchInput = () => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products
        .search(searchQuery)
        .then((products) => setProducts(products))
        .catch((error) => console.log(error));
    },
    250,
    [searchQuery]
  );

  const itemClick = () => {
    setProducts([]);
    setSearchQuery("");
    setFocused(false);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />
      )}

      <div
        className="flex rounded-2xl justify-between relative h-11 z-30"
        ref={ref}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Find pizza"
          className="bg-gray-100 rounded-xl outline-none w-full pl-11"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {searchQuery.length > 0 && (
          <div
            className={cn(
              "absolute bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30 w-full",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                onClick={itemClick}
                key={product.id}
                href={`/product/${product.id}`}
                className="w-full px-3 py-2 hover:bg-primary/10 flex items-center gap-3"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-10 w-10 object-cover"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
