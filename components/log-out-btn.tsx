import SignOutIcon from "@/icons/signout-icon";
import { Button } from "@nextui-org/react";

function LogOut() {
  return (
    <Button
      className="w-full rounded-xl p-6 sm:p-4 justify-start self-end text-md"
      color="danger"
      variant="flat"
      startContent={<SignOutIcon />}
    >
      Sign Out
    </Button>
  );
}

export default LogOut;
