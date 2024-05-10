import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeToggleButton  = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light"? <MoonIcon /> : <SunIcon />}
      variant="ghost"
      aria-label={`Toggle ${colorMode} mode`}
      size="sm"
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleButton;