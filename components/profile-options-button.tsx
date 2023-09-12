import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { ComponentProps, ReactNode } from "react";
import { BsFillGearFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { PiPlaceholderFill } from "react-icons/pi";
import ThemeSwitch from "./theme-switch";
import { ProfileOptionsType, options } from "@/data/profile-options";

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
        {
          // @ts-expect-error
          <DropdownSection showDivider>
            <DropdownItem
              isReadOnly
              className="data-[hover=true]:bg-transparent cursor-default"
            >
              <ThemeSwitch />
            </DropdownItem>

            {options.map(({ key, Icon, label }: ProfileOptionsType) => (
              <DropdownItem
                key={key}
                startContent={<Icon className="text-lg" />}
                aria-label={key}
              >
                {label}
              </DropdownItem>
            ))}
          </DropdownSection>
        }
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
