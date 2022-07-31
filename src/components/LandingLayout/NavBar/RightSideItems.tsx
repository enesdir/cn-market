import BasketIcon from '@/components/LandingLayout/NavBar/BasketIcon';
import UserMenu from '@/components/layout/UserMenu';
import { NextButtonLink } from '@/components/NextButtonLink';
import { useAuth } from '@/features/auth/';

function SignupButton() {
  return (
    <>
      <NextButtonLink
        href="/auth/login"
        size="sm"
        rounded="md"
        color={['primary.500', 'primary.500', 'white', 'white']}
        bg={['white', 'white', 'primary.500', 'primary.500']}
        _hover={{
          bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
        }}
      >
        Create Account
      </NextButtonLink>
    </>
  );
}

export interface RightSideItemsProps {
  basket?: boolean;
}

export default function RightSideItems({ basket = false }: RightSideItemsProps) {
  const auth = useAuth();
  if (auth?.currentUser) {
    return (
      <>
        {basket && <BasketIcon />}
        <UserMenu />
      </>
    );
  }

  return (
    <>
      {basket && <BasketIcon />}
      <SignupButton />
    </>
  );
}
