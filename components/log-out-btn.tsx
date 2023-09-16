import { Button } from "@nextui-org/react";
import React from "react";

function LogOut() {
  return (
    <Button
      className="w-full rounded self-end text-lg"
      color="danger"
      variant="flat"
    >
      Log Out
    </Button>
  );
}

export default LogOut;
