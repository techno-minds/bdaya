"use client";
import { useState } from "react";
import LinkButton from "./tab-link-btn";
import LogOut from "./log-out-btn";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "./Logo";
import { routes } from "@/data/route-tabs";

const variants = {
  open: {
    opacity: 1,
    y: 0,
    padding: "20px",
    height: "fit-content",
    overflow: "visible",
  },
  closed: { opacity: 1, y: "100%", height: 0, padding: 0, overflow: "hidden" },
};

function SideBar() {
  const matches = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(matches);
  return (
    <div
      className={`h-screen fixed flex justify-end items-center flex-col gap-y-3 z-20 sm:relative ${
        isOpen ? "backdrop-blur-sm backdrop-contrast-75" : ""
      }`}
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="bg-zinc-500 sm:hidden w-20 h-2 relative z-30 rounded-full"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
          console.log("done");
        }}
      ></div>
      <motion.div
        className="flex justify-between items-start flex-col gap-y-5 h-full z-10 bottom-0  rounded-s-xl rounded-e-xl py-5 px-5 sm:relative sm:rounded-none sm:top-0 sm:left-0 bg-white dark:bg-black dark:shadow-slate-700 "
        animate={matches ? (isOpen ? "open" : "closed") : "null"}
        variants={variants}
      >
        <Divider
          className="absolute top-0 hidden sm:block right-0"
          orientation="vertical"
        />
        <Logo />
        <div className="flex w-full pb-3 h-90per items-start overflow-auto content-start flex-wrap gap-y-4">
          {routes.map(({ key, url, name, IconOutline, IconSolid }) => {
            return (
              <LinkButton
                key={key}
                url={url}
                name={name}
                IconOutline={IconOutline}
                IconSolid={IconSolid}
              />
            );
          })}
        </div>
        <Divider />
        <LogOut />
      </motion.div>
    </div>
  );
}

export default SideBar;
