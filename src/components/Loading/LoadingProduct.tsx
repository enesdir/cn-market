import { Stack, Skeleton } from '@chakra-ui/react';

export function LoadingProduct() {
  return (
    <Stack h="420px" w="100%" maxW="280px">
      <Skeleton height="140px" style={{ transform: 'none' }} animation="wave" />
      <Skeleton height="80px" style={{ transform: 'none' }} animation="wave" />
      <Skeleton variant="text" width="60%" style={{ transform: 'none' }} animation="wave" />
    </Stack>
  );
}
