import { Box, Container, Divider, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';

import FooterContainer, { IfooterElement } from './FooterContainer';
import FooterText from './FooterText';

const footerElements: IfooterElement[] = [
  {
    headerText: 'Product',
    elements: [
      {
        to: '#',
        text: 'Overview',
      },
      {
        to: '#',
        text: 'Features',
      },
      {
        to: '#',
        text: 'Tutorials',
      },
      {
        to: '#',
        text: 'Pricing',
      },
      {
        to: '#',
        text: 'Releases',
      },
    ],
  },
  {
    headerText: 'Company',
    elements: [
      {
        to: '#',
        text: 'About',
      },
      {
        to: '#',
        text: 'Press',
      },
      {
        to: '#',
        text: 'Careers',
      },
      {
        to: '#',
        text: 'Contact',
      },
      {
        to: '#',
        text: 'Partners',
      },
    ],
  },
  {
    headerText: 'Support',
    elements: [
      {
        to: '#',
        text: 'Help Center',
      },
      {
        to: '#',
        text: 'Terms of Service',
      },
      {
        to: '#',
        text: 'Legal',
      },
      {
        to: '#',
        text: 'Privacy Policy',
      },
      {
        to: '#',
        text: 'Status',
      },
    ],
  },
  {
    headerText: 'Follow Us',
    elements: [
      {
        to: '#',
        text: 'Facebook',
      },
      {
        to: '#',
        text: 'Twitter',
      },
      {
        to: '#',
        text: 'Dribble',
      },
      {
        to: '#',
        text: 'Instagram',
      },
      {
        to: '#',
        text: 'LinkedIn',
      },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo h="4rem" />
            </Box>
            <Divider />
            <FooterText text={`© E-Commerce Application | ${year}. All rights reserved`} />
          </Stack>
          <FooterContainer footerElements={footerElements} />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
