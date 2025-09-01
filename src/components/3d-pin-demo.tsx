"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo({
  userTitle = "User Dashboard",
  userDescription = "Access your personal dashboard and account information.",
  adminTitle = "Admin Panel",
  adminDescription = "Manage users, settings, and system configurations.",
}: {
  userTitle?: React.ReactNode;
  userDescription?: React.ReactNode;
  adminTitle?: React.ReactNode;
  adminDescription?: React.ReactNode;
}) {
  return (
  <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-8 py-6 md:py-10">
      {/* USER Pin */}
      <PinContainer
        title="USER"
        href="https://alethemyra.onrender.com"
        className="border-0"
      >
        <div className="flex basis-full flex-col p-2 md:p-4 tracking-tight sm:basis-1/2 w-[90vw] max-w-xs md:w-[18rem] md:h-[18rem] h-[12rem] bg-[#7C6A4E] rounded-2xl items-center justify-center text-center shadow-lg mb-4 md:mb-0 border border-[#C2A66C]/30">
          <h3
            className="max-w-xs !pb-1 !m-0 font-bold text-lg md:text-2xl leading-tight"
            style={{ color: "#F4F4F2" }}
          >
            {userTitle}
          </h3>
          <div className="text-sm md:text-lg !m-0 !p-0 font-medium mt-1 leading-snug" style={{ color: "#F4F4F2" }}>
            {userDescription}
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-3 bg-gradient-to-br from-[#C2A66C] via-[#FFD700] to-[#7C6A4E]" />
        </div>
      </PinContainer>

      {/* ADMIN Pin */}
      <PinContainer
        title="ADMIN"
        href="https://alethemyra.onrender.com/admin"
        className="border-0"
      >
        <div className="flex basis-full flex-col p-2 md:p-4 tracking-tight sm:basis-1/2 w-[90vw] max-w-xs md:w-[18rem] md:h-[18rem] h-[12rem] bg-[#7C6A4E] rounded-2xl items-center justify-center text-center shadow-lg border border-[#C2A66C]/30">
          <h3
            className="max-w-xs !pb-1 !m-0 font-bold text-lg md:text-2xl leading-tight"
            style={{ color: "#F4F4F2" }}
          >
            {adminTitle}
          </h3>
          <div className="text-sm md:text-lg !m-0 !p-0 font-medium mt-1 leading-snug" style={{ color: "#F4F4F2" }}>
            {adminDescription}
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-3 bg-gradient-to-br from-[#C2A66C] via-[#FFD700] to-[#7C6A4E]" />
        </div>
      </PinContainer>
    </div>
  );
}
