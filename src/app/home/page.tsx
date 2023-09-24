"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function HomePage() {

  return (
    <main className="w-screen h-screen">
      <Image src="/vectorBR.svg" alt="Ilustração" width={700} height={700} className="absolute bottom-0 right-0" />
      <Navbar />
    </main>
  );
}
