import { Heading } from '@chakra-ui/react';

export interface FooterHeaderProps {
  headerText: string;
}

function FooterHeader({ headerText }: FooterHeaderProps) {
  return (
    <Heading my={1} fontSize={{ base: 'lg', md: 'xl' }} mb={2}>
      {headerText}
    </Heading>
  );
}

export default FooterHeader;
