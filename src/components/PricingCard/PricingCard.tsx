import { Box, Button, Divider, Heading, HStack, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import { FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';

interface PricingCardProps {
  name: string;
  popular: boolean;
  price: string;
  info: string;
  features: string[];
}
export function PricingCard({ popular, name, price, info = '', features = [] }: PricingCardProps) {
  return (
    <Stack
      spacing={2}
      border="3px solid"
      borderColor={popular ? 'teal.300' : 'gray.300'}
      borderRadius="0.7rem"
      p={4}
      h="350px"
      position="relative"
    >
      {popular && (
        <Box
          position="absolute"
          top="0"
          right="0"
          backgroundColor="teal.300"
          color="white"
          paddingX={2}
          paddingY={1}
          borderRadius="0 0 0 0.7rem"
          fontSize="0.8rem"
        >
          POPULAR
        </Box>
      )}
      <Text textTransform="uppercase">{name}</Text>
      <HStack>
        <Heading>{price ?? 'Free'}</Heading>
        {price && (
          <Box as="span" color="gray.600" fontSize="sm">
            / mo
          </Box>
        )}
      </HStack>
      <Divider borderColor="blackAlpha.500" />
      <List flex="1">
        {features.map((feat) => (
          <ListItem key={Math.random()}>
            <ListIcon as={FaCheckCircle} color="gray.400" />
            {feat}
          </ListItem>
        ))}
      </List>
      <Box>
        <Button
          variant="solid"
          size="sm"
          width="100%"
          rightIcon={<FaLongArrowAltRight />}
          borderRadius={0}
          display="flex"
          justifyContent="space-between"
          backgroundColor={popular ? 'teal.300' : 'gray.400'}
          _hover={{
            backgroundColor: popular ? 'teal.500' : 'gray.300',
          }}
          color="white"
        >
          Buy
        </Button>
        <Text fontSize="xs">{info}</Text>
      </Box>
    </Stack>
  );
}
