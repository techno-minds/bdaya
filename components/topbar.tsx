"use client";
import React, { ComponentProps } from "react";
import { User, Switch, Button, Divider } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill, BsFillGearFill } from "react-icons/bs";
import ThemeSwitch from "@/components/theme-switch";
import { cn } from "@/lib/utils";

interface TopbarProps extends ComponentProps<"div"> {}

export default function Topbar({ className, ...props }: TopbarProps) {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div
        className="w-full flex-1 px-4 flex flex-row justify-between align-center"
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
      <Divider />
    </div>
  );
}
