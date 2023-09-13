import React from "react";
import Topbar from "@/components/topbar";
import { NotificationsProvider } from "@/hooks/useNotifications";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <NotificationsProvider>
      <div className="grid grid-rows-[60px_1fr] grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
        <Topbar
          className="md:col-start-2 row-end"
          name="Jane Doe"
          role="Product Designer"
        />
        <main className="md:col-start-2 row-start-2 p-4">{children}</main>
      </div>
    </NotificationsProvider>
  );
}
