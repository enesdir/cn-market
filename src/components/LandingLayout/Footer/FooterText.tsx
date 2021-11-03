import { Text, useColorModeValue } from '@chakra-ui/react';

function FooterText({ text }: { text: string }) {
  return (
    <Text fontSize={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.700', 'white')} my={3}>
      {text}
    </Text>
  );
}

export default FooterText;
