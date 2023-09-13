import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { FaBell } from "react-icons/fa6";

interface INotificationsButtonProps {
  notifications: any[];
}

export function NotificationsButton({
  notifications,
}: INotificationsButtonProps) {
  return (
    <Badge content="1" shape="circle" color="danger">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <FaBell className="w-[20px] h-[20px]" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            key="notif1"
            startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
            description="You have received on notification"
            className="bg-slate-200"
          >
            Notification
          </DropdownItem>
          <DropdownItem
            key="notif2"
            startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
            description="You have received on notification"
          >
            Notification
          </DropdownItem>
          <DropdownItem
            key="notif3"
            startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
            description="You have received on notification"
          >
            Notification
          </DropdownItem>
          <DropdownItem
            key="notif4"
            startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
            description="You have received on notification"
          >
            Notification
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Badge>
  );
}
