import { Button } from "@nextui-org/react";
import { TfiCup } from "react-icons/tfi";

function LogOut() {
  return (
    <Button
      className="w-full rounded justify-start self-end text-md"
      color="danger"
      variant="flat"
      startContent={<TfiCup />}
    >
      Sign Out
    </Button>
  );
}

export default LogOut;
