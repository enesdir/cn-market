import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

import { PUBLIC_ROUTES } from '@components/RouteWrapper';
import { useAuth } from '@contexts/AuthProvider';

type AuthWrapperProps = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { currentUser } = useAuth();

  const router = useRouter();
  const { pathname } = router;
  const isPublicRoute = PUBLIC_ROUTES.indexOf(pathname) >= 0;

  const isUnauthorized = currentUser === null && !isPublicRoute;

  useEffect(() => {
    if (isUnauthorized) {
      router.push('/auth/login');
    } else {
      null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, pathname]);

  return <>{!isUnauthorized && children}</>;
};

export default AuthWrapper;
