"use client";
import React, { useState } from "react";
import LinkButton from "./LinkButtons/LinkButton";
import LogOut from "./LogOut/LogOut";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { Button } from "@nextui-org/react";
import { useMediaQuery } from "@mantine/hooks";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function SideBar() {
  const matches = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(matches);
  return (
    <>
      <motion.div
        className="flex justify-between items-center sm:relative absolute sm:top-0 sm:left-0 h-100vh-50px h-screen flex-col bg-white py-5 px-3"
        animate={matches ? (isOpen ? "open" : "closed") : "null"}
        variants={variants}
      >
        <div className="flex border-b-2 w-full pb-3 h-90per items-start overflow-auto content-start flex-wrap gap-y-5">
          <LinkButton nameBtn="Route 1" href="#" />
          <LinkButton nameBtn="Route 2" href="#" />
          <LinkButton nameBtn="Route 3" href="#" />
          <LinkButton nameBtn="Route 4" href="#" />
          <LinkButton nameBtn="Route 5" href="#" />
        </div>
        <LogOut />
      </motion.div>
      <Button
        className="flex justify-center items-center absolute bottom-5 right-5 w-12 h-12 text-2xl sm:hidden"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        color="success"
      >
        <TiThMenu />
      </Button>
    </>
  );
}

export default SideBar;
