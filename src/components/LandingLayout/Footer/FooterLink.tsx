import { NextChakraLink } from '@/components/NextChakraLink';

export interface FooterLinkProps {
  text: string;
  to: string;
}

function FooterLink({ text, to }: FooterLinkProps) {
  return (
    <NextChakraLink href={to} my={2} fontSize={{ base: 'sm', md: 'md' }}>
      {text}
    </NextChakraLink>
  );
}

export default FooterLink;
