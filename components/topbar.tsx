"use client";
import React, { ComponentProps } from "react";
import { User, Switch, Button } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill, BsFillGearFill } from "react-icons/bs";
import ThemeSwitch from "@/components/theme-switch";

interface TopbarProps extends ComponentProps<"div"> {}

export default function Topbar({ className, ...props }: TopbarProps) {
  return (
    <div
      className={`w-full p-4 bg-white flex flex-row justify-between align-center border-b-gray-50 border-b-2 ${className}`}
      {...props}
    >
      <User
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />
      <div className="flex items-center gap-2">
        <ThemeSwitch />
        <Button size="sm" isIconOnly radius="full">
          <BsFillGearFill />
        </Button>
      </div>
    </div>
  );
}
