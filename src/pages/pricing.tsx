import { Box, Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';

import LandingLayout from '@/components/LandingLayout';
import { PricingCard } from '@/features/landing';

const prices = [
  {
    name: 'start',
    features: new Array(2).fill(null).map((e) => 'Lorem ipsum dolor'),
    info: 'Fusce purus tellus, tristique quis libero sit amet...',
  },
  {
    name: 'pro',
    price: '$11',
    popular: true,
    features: new Array(3).fill(null).map((e) => 'Lorem ipsum dolor'),
    info: 'Fusce purus tellus, tristique quis libero sit amet...',
  },
  {
    name: 'business',
    price: '$29',
    features: new Array(4).fill(null).map((e) => 'Lorem ipsum dolor'),
    info: 'Fusce purus tellus, tristique quis libero sit amet...',
  },
  {
    name: 'special',
    price: '$190',
    features: new Array(5).fill(null).map((e) => 'Lorem ipsum dolor'),
    info: 'Fusce purus tellus, tristique quis libero sit amet...',
  },
];

function Pricing() {
  return (
    <LandingLayout logoLabel="PRICING PAGE" basket={false} footer={true}>
      <Flex direction="column" alignItems="center" justifyContent="center" minH="70vh" w="full">
        <Stack spacing={5} marginY={5} justifyContent="flex-start" alignItems="center" w="full" paddingX={[5, 0]}>
          <VStack alignItems="center" w="full">
            <Heading color="teal.300">Pricing</Heading>
            <Text mb={5} textAlign="center">
              Vivamus suscipit lacinia massa, imperdiet bibendum erat scelerisque non.
            </Text>
          </VStack>
          <Stack
            spacing={0}
            isInline
            border="1px solid"
            borderColor="teal.300"
            borderRadius="4px"
            justifyContent="center"
            alignItems="stretch"
            display="flex"
            width="fit-content"
            mb={3}
          >
            <Box backgroundColor="teal.300" p=".3rem 1rem">
              Monthly
            </Box>
            <Box p=".3rem 1rem">Annually</Box>
          </Stack>
          <Grid
            w="full"
            gap={5}
            justifyContent="center"
            templateColumns={{
              base: 'inherit',
              md: 'repeat( auto-fit, 250px )',
            }}
          >
            {prices.map((price) => (
              <PricingCard
                key={price.name}
                name={price.name}
                price={price.price}
                features={price.features}
                info={price.info}
                popular={price?.popular}
              />
            ))}
          </Grid>
        </Stack>
      </Flex>
    </LandingLayout>
  );
}

export default Pricing;
