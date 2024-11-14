"use client";

import React from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import SearchInput from "../SearchInput";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <div className="font-bold text-xl">Hotel Booking</div>
          </div>
          <SearchInput />
          <div className="flex gap-3 items-center">
            <div>theme</div>
            <UserButton afterSignOutUrl="/" />
            {!userId && (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => router.push("/sign-in")}
                >
                  Sign In
                </Button>
                <Button size="sm" onClick={() => router.push("/sign-up")}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
