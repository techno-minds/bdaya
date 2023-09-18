import { IconType } from "react-icons";
import { TfiCup } from "react-icons/tfi";
import { Key } from "react";
import { Url } from "next/dist/shared/lib/router/router";

export interface tabsType {
  key: Key;
  name: String;
  url: Url;
  Icon: IconType;
}

export const routes: tabsType[] = [
  {
    key: 1,
    name: "Button",
    url: "#",
    Icon: TfiCup,
  },
  {
    key: 2,
    name: "Button",
    url: "#",
    Icon: TfiCup,
  },
  {
    key: 3,
    name: "Button",
    url: "#",
    Icon: TfiCup,
  },
  {
    key: 4,
    name: "Button",
    url: "#",
    Icon: TfiCup,
  }
];
