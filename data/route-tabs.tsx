import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { Key, ReactNode } from "react";
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
    name: "Home",
    url: "#",
    Icon: FaHome,
  },
  {
    key: 2,
    name: "Settings",
    url: "#",
    Icon: CiSettings,
  },
  {
    key: 3,
    name: "Contact Us",
    url: "#",
    Icon: RiCustomerService2Line,
  },
  {
    key: 4,
    name: "Home",
    url: "#",
    Icon: FaHome,
  },
  {
    key: 5,
    name: "Settings",
    url: "#",
    Icon: CiSettings,
  },
  {
    key: 6,
    name: "Contact Us",
    url: "#",
    Icon: RiCustomerService2Line,
  },
];
