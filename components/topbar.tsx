"use client";
import React, { ComponentProps } from "react";
import { User, Switch, Button, Divider } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill, BsFillGearFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import ThemeSwitch from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import { ProfileOptionsButton } from "./profile-options-button";

interface TopbarProps extends ComponentProps<"div"> {
  name?: string;
  role?: string;
}

export default function Topbar({
  className,
  name,
  role,
  ...props
}: TopbarProps) {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div
        className="w-full flex-1 px-4 flex flex-row justify-between align-center"
        {...props}
      >
        <User
          name={name || "Unknown Name"}
          description={role || "Unknown Role"}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className="z-0"
        />
        <div className="flex items-center gap-2">
          <Button size="sm" isIconOnly radius="full" variant="light">
            <FaBell className="text-lg" />
          </Button>
          <ProfileOptionsButton />
        </div>
      </div>
      <Divider />
    </div>
  );
}
