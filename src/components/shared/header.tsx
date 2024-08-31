"use client";

import React, { useState } from "react";
import { Container } from "./container";
import Image from "next/image";
import SearchInput from "./search-input";
import { Button } from "../ui/button";
import { ShoppingCart, UserRound } from "lucide-react";
import { ProfilePopup } from "./profile-popover";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <Container className="flex justify-between items-center py-8">
        <div className="flex items-center gap-2">
          <Image src="/pizza-icon.png" alt="Logo" width={60} height={60} />
          <div className="">
            <h1 className="font-extrabold text-2xl uppercase">Luvtorn Pizza</h1>
            <h3 className="text-gray-400 leading-3">
              it couldn&#39;t be tastier
            </h3>
          </div>
        </div>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <ProfilePopup setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Button
              variant={"outline"}
              className="flex items-center justify-center gap-1"
              onClick={() => setIsLoggedIn(true)}
            >
              <UserRound size={20} />
              Log in
            </Button>
          )}
          <Button variant={"outline"}>
            <ShoppingCart />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
