import { Button } from "@nextui-org/react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface propsTypes {
  nameBtn: String;
  href: Url;
}

function LinkButton({ nameBtn, href }: propsTypes) {
  return (
    <Button className="w-full rounded-md" color="primary" variant="ghost">
      <Link href={href}>{nameBtn}</Link>
    </Button>
  );
}

export default LinkButton;
