import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { BsFillGearFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import ThemeSwitch from "./theme-switch";

interface IProfileOptionsButtonProps {}
export function ProfileOptionsButton({}: IProfileOptionsButtonProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" isIconOnly radius="full" variant="light">
          <BsThreeDotsVertical className="text-lg" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            className="data-[hover=true]:bg-transparent cursor-default"
          >
            <ThemeSwitch />
          </DropdownItem>
          <DropdownItem
            key="edit"
            startContent={<BiLogOut className="text-lg" />}
          >
            Edit file
          </DropdownItem>
          <DropdownItem
            key="settings"
            startContent={<BsFillGearFill className="text-lg" />}
          >
            Settings
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            startContent={<BiLogOut className="text-lg" />}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
