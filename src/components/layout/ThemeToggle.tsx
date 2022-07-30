import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react';
import { HiMoon, HiSun } from 'react-icons/hi';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ThemeToggle: React.FC<ColorModeSwitcherProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Color Mode"
      icon={colorMode === 'light' ? <HiMoon /> : <HiSun />}
      onClick={toggleColorMode}
      borderRadius="full"
      variant="ghost"
      {...props}
    />
  );
};

export default ThemeToggle;
