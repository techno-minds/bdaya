import { tabsType } from "@/data/route-tabs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function LinkButton({ url, name, Icon }: tabsType) {
  return (
    <Link
      className=" text-lg w-full gap-x-3"
      href={url}
    >
      <Button
        className="w-full flex justify-start items-centery text-xl rounded-md"
        color="primary"
        variant="light"
        startContent={<Icon />}
      >
        {name}
      </Button>
    </Link>
  );
}

export default LinkButton;
