"use client";
import Logo from "@/components/Logo/Logo";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-[50px_1fr] grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      <Logo />
      <div>NavBar</div>
      <SideBar />
      <main className="md:col-start-2 row-start-2 bg-red-200">{children}</main>
    </div>
  );
}
