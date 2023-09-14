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
import React from "react";
import { FaBell, FaBoxOpen } from "react-icons/fa6";

interface INotificationsButtonProps {}

export function NotificationsButton({}: INotificationsButtonProps) {
  const { notifications, unread, onRead } = useNotifications();

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
        <DropdownMenu>
          {Boolean(notifications.length) ? (
            notifications.map(
              ({ description, unread, label }: NotificationType) => (
                <DropdownItem
                  key="notif1"
                  startContent={<FaBell className="w-[20px] h-[20px] mx-4" />}
                  description={description}
                  className={cn(unread ? "bg-slate-200 dark:bg-slate-600" : "")}
                >
                  {label}
                </DropdownItem>
              )
            )
          ) : (
            <DropdownItem
              isReadOnly
              className="data-[hover=true]:bg-transparent cursor-default"
            >
              <FaBoxOpen className="text-gray-400 dark:text-gray-200 w-[70px] h-[70px] mx-auto" />
              <p className="text-center text-lg font-semibold mt-2">Empty</p>
              <p className="text-center text-gray-500 dark:text-gray-300">
                There are no notifications currently
              </p>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </Badge>
  );
}
