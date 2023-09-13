import { NotificationType } from "@/data/notifications";
import useNotifications from "@/hooks/useNotifications";
import { cn } from "@/lib/utils";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { FaBell } from "react-icons/fa6";

interface INotificationsButtonProps {}

export function NotificationsButton({}: INotificationsButtonProps) {
  const { notifications, unread, addNotifications, onRead } =
    useNotifications();

  return (
    <Badge
      content={unread}
      isInvisible={!Boolean(unread)}
      shape="circle"
      color="danger"
    >
      <Dropdown placement="bottom-end" onClose={onRead}>
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
        <DropdownMenu items={notifications}>
          {(notification) => (
            <DropdownItem
              key="notif1"
              startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
              description={(notification as NotificationType).description}
              className={cn(
                (notification as NotificationType).unread
                  ? "bg-slate-200 dark:bg-slate-600"
                  : ""
              )}
            >
              {(notification as NotificationType).label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </Badge>
  );
}

{
  /* <DropdownItem
key="notif1"
startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
description="You have received on notification"
className="bg-slate-200 dark:bg-slate-600"
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
</DropdownItem> */
}
