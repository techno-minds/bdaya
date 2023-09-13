export interface NotificationType {
  key: string;
  label: string;
  description: string;
  unread?: boolean;
}

export const notifications: NotificationType[] = [
  {
    key: "notif1",
    label: "Notification",
    description: "You have received on notification",
  },
  {
    key: "notif2",
    label: "Notification",
    description: "You have received on notification",
  },
  {
    key: "notif3",
    label: "Notification",
    description: "You have received on notification",
  },
  {
    key: "notif4",
    label: "Notification",
    description: "You have received on notification",
  },
  {
    key: "notif5",
    label: "Notification",
    description: "You have received on notification",
  },
];
