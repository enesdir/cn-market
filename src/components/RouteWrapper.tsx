import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import { useAuth } from '@contexts/AuthProvider';

import { LoadingPage } from './Loading';

export const PUBLIC_ROUTES = [
  '/',
  '/auth/login',
  '/auth/register',
  '/store',
  '/store/saved',
  '/store/product/[productId]',
  '/store/cart',
  '/features',
  '/pricing',
];
export const PRIVATE_ROUTES = ['/my'];

type RouteWrapperProps = {
  children: ReactNode;
};

const RouteWrapper = ({ children }: RouteWrapperProps) => {
  const router = useRouter();
  const { pathname } = router;

  const { currentUser } = useAuth();
  const [busy, setBusy] = useState<boolean>(true);

  const toast = useToast();

  const isPublicRoute = PUBLIC_ROUTES.indexOf(pathname) >= 0;
  const isPrivateRoute = PRIVATE_ROUTES.indexOf(pathname) >= 0;
  const isUnauthorized = currentUser === null && isPrivateRoute;

  const routeCheck = () => {
    if (isUnauthorized) {
      router.replace('/auth/login').then(() => {
        toast({
          title: 'Your email is not verified yet.',
          description: `Cs`,
          position: 'top',
          status: 'warning',
          isClosable: true,
          duration: 4000,
        });
      });
    } else {
      null;
    }
    if (currentUser) {
      if (!currentUser.emailVerified && pathname !== '/auth/register' && !isPublicRoute) {
        setBusy(true);
        currentUser.reload().then(() => {
          if (!currentUser.emailVerified) {
            router.push('/').then(() => {
              toast({
                title: 'Your email is not verified yet.',
                description: `Check your email (${currentUser.email}) for verification link.`,
                position: 'top',
                status: 'warning',
                isClosable: true,
              });
            });
          }
        });
      }
    }

    setBusy(false);
  };

  useEffect(() => {
    routeCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentUser]);

  return (
    <>
      {busy ?? <LoadingPage />}
      {!isUnauthorized && children}
    </>
  );
};

export default RouteWrapper;
