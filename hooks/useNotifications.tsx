"use client";
import { NotificationType } from "@/data/notifications";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextData = {
  notifications: NotificationType[];
  setNotifications: Dispatch<SetStateAction<NotificationType[]>>;
  unread: number;
  setUnread: Dispatch<SetStateAction<number>>;
};

const NotificationsContext = createContext<ContextData>({
  notifications: [],
  setNotifications: () => {},
  unread: 0,
  setUnread: () => {},
});

export function NotificationsProvider({ children }: any) {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const [unread, setUnread] = useState<number>(0);

  return (
    <NotificationsContext.Provider
      value={{ notifications, setNotifications, unread, setUnread }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export default function useNotifications() {
  const { notifications, setNotifications, unread, setUnread } =
    useContext<ContextData>(NotificationsContext);

  function addNotifications(collection: NotificationType[]) {
    let unreadCount = 0;
    setNotifications((previous) => {
      collection.forEach((notification) => {
        notification.unread = true;
        unreadCount += 1;
      });

      return [...collection, ...previous];
    });

    setUnread((previous) => previous + unreadCount);
  }

  function onRead() {
    setNotifications((previous) => {
      return previous.map((notification) => {
        notification.unread = false;

        return notification;
      });
    });

    setUnread(0);
  }

  return { notifications, unread, addNotifications, onRead };
}
