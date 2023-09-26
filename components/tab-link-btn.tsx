"use client";
import { tabsType } from "@/data/route-tabs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LinkButton({ url, name, IconOutline, IconSolid }: tabsType) {
  const pathname = usePathname();
  return (
    <Link className="w-full" href={url}>
      <Button
        className={`w-full flex justify-start items-center ${
          pathname === url ? "text-primary bg-primary-50" : ""
        } hover:text-primary hover:bg-primary-50 text-md rounded-xl p-6 sm:p-4`}
        color="default"
        data-hover="false"
        variant="light"
        startContent={pathname === url ? <IconSolid /> : <IconOutline />}
      >
        {name}
      </Button>
    </Link>
  );
}

export default LinkButton;
