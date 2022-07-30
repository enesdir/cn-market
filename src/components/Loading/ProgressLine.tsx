import { Progress } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function ProgressLine() {
  const router = useRouter();
  return (
    <Progress
      mt={router.pathname === '/auth/login' || router.pathname === 'auth/register' ? ['120px', '72px'] : 0}
      size="xs"
      isIndeterminate
    />
  );
}
