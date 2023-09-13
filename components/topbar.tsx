"use client";
import React, { ComponentProps, useState } from "react";
import { User, Switch, Button, Divider } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill, BsFillGearFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ThemeSwitch from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import { ProfileOptionsButton } from "./profile-options-button";
import { NotificationsButton } from "@/components/notifications-button";
import { NotificationType } from "@/data/notifications";
import useNotifications from "@/hooks/useNotifications";

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
        />
        <div className="flex items-center gap-2">
          <NotificationsButton />
          <ProfileOptionsButton />
        </div>
      </div>
      <Divider />
    </div>
  );
}
