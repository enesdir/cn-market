import { Stack, Skeleton } from '@chakra-ui/react';

type Props = {
  display: { base: string; bigTablet: string };
};

export function LoadingCart({ display }: Props) {
  return (
    <Stack display={display} h="100%" w="100%" mb={4}>
      <Skeleton height="100px" style={{ transform: 'none' }} animation="wave" />
      <Skeleton variant="text" width="60%" style={{ transform: 'none' }} animation="wave" />
    </Stack>
  );
}
