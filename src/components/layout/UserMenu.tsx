import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { HiChevronDown, HiMoon, HiOutlineLogout, HiOutlinePresentationChartLine, HiSun } from 'react-icons/hi';

import { useAuth } from '@/contexts/AuthProvider';

export default function UserMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth();
  const [isLargerThan567] = useMediaQuery('(min-width: 567px)');
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/my');
  };
  const avatar = <Avatar size="sm" name={currentUser?.displayName} src={currentUser?.photoURL} />;
  const largeButton = (
    <MenuButton
      as={Button}
      rounded="full"
      cursor="pointer"
      size="sm"
      transition="all 0.2s"
      _expanded={{ bg: 'blue.400' }}
      _focus={{ boxShadow: 'outline' }}
      leftIcon={avatar}
      rightIcon={<Icon as={HiChevronDown} />}
    >
      {currentUser?.displayName}
    </MenuButton>
  );
  const smallButton = (
    <MenuButton
      rounded="full"
      cursor="pointer"
      size="sm"
      transition="all 0.2s"
      _expanded={{ bg: 'blue.400' }}
      _focus={{ boxShadow: 'outline' }}
    >
      {avatar}
    </MenuButton>
  );
  return (
    <Menu isLazy>
      {isLargerThan567 ? largeButton : smallButton}
      <MenuList>
        <MenuItem icon={<HiOutlinePresentationChartLine />} onClick={handleClick}>
          Your Portfolio
        </MenuItem>
        <MenuItem icon={colorMode === 'light' ? <HiMoon /> : <HiSun />} onClick={toggleColorMode}>
          <span>Toggle Theme</span>
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => logout()} icon={<HiOutlineLogout />}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
