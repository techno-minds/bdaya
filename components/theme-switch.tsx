import { Switch } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill, BsFillGearFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      endContent={<BsFillMoonFill />}
      startContent={<BsFillSunFill />}
      isSelected={theme === "dark"}
      onValueChange={(isSelected) => {
        setTheme(isSelected ? "dark" : "light");
      }}
    />
  );
}
