import { Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export default function Hero() {
  const router = useRouter();
  return (
    <Container maxW="5xl">
      <Stack textAlign="center" align="center" spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }} lineHeight="110%">
          Build Your Own Marketplace{' '}
          <Text as="span" color="orange.400">
            made easy
          </Text>
        </Heading>
        <Text color="gray.500" maxW="2xl">
          Selling things online has come a long way since eBay was the only game in town. Online shopping is one of the
          most widespread online activities worldwide. The Global retail e-commerce sales are forecasted to grow to 5.4
          trillion US dollars in 2022, with marketplaces taking a tidbit of these extra sales.
        </Text>
        <Stack spacing={6} direction="row">
          <Button
            rounded="full"
            px={6}
            colorScheme="orange"
            bg="orange.400"
            _hover={{ bg: 'orange.500' }}
            onClick={() => router.push('/auth/register')}
          >
            Get started
          </Button>
          <Button rounded="full" px={6} onClick={() => router.push('/features')}>
            Learn more
          </Button>
        </Stack>
        <Flex w="full"></Flex>
      </Stack>
    </Container>
  );
}
