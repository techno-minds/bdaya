import { tabsType } from "@/data/route-tabs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function LinkButton({ url, name, Icon }: tabsType) {
  return (
    <Button
      className="w-full justify-start rounded-md"
      color="primary" variant="light"
    >
      <Link
        className="flex justify-center items-center text-2xl gap-x-3"
        href={url}
      >
        {<Icon />} {name}
      </Link>
    </Button>
  );
}

export default LinkButton;
