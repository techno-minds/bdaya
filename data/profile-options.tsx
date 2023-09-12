import { IconType } from "react-icons";
import { PiPlaceholderFill } from "react-icons/pi";
import { BsFillGearFill } from "react-icons/bs";

export interface ProfileOptionsType {
  key: string;
  label: string;
  Icon: IconType;
}

export const options: ProfileOptionsType[] = [
  {
    key: "option",
    label: "Option",
    Icon: PiPlaceholderFill,
  },
  {
    key: "option2",
    label: "Option",
    Icon: PiPlaceholderFill,
  },
  {
    key: "settings",
    label: "Settings",
    Icon: BsFillGearFill,
  },
];
