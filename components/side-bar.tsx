"use client";
import React, { useRef, useState } from "react";
import LinkButton from "./tab-link-btn";
import LogOut from "./log-out-btn";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { Button, Divider } from "@nextui-org/react";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "./Logo";
import { routes } from "@/data/route-tabs";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function SideBar() {
  const constraintsRef = useRef(null);
  // const matches = useMediaQuery("(max-width: 767px)");
  // const [isOpen, setIsOpen] = useState(matches);
  return (
    <>
      <motion.div
        className="flex bg-white dark:bg-black dark:shadow-slate-700 justify-between items-start sm:relative absolute sm:top-0 sm:left-0 z-10 sm:h-screen h-fit bottom-0 gap-y-5 rounded-s-xl rounded-e-xl flex-col py-5 px-5"
        // animate={matches ? (isOpen ? "open" : "closed") : "null"}
        variants={variants}
        drag="y"
        dragConstraints={{
          top: -50,
          bottom: 10,
        }}
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
      {/* <Button
        className="flex justify-center z-30 items-center rounded-full absolute bottom-5 right-5 w-12 h-12 text-2xl sm:hidden"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        color="primary"
        variant="shadow"
        isIconOnly
      >
        <TiThMenu />
      </Button> */}
    </>
  );
}

export default SideBar;
