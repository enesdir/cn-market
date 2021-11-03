import { Stack } from '@chakra-ui/react';

import FooterHeader, { FooterHeaderProps } from './FooterHeader';
import FooterLink, { FooterLinkProps } from './FooterLink';

interface FooterContainerProps {
  footerElements: IfooterElement[];
}
interface FooterLinksItemProps {
  elements: FooterLinkProps[];
}
export interface IfooterElement extends FooterLinksItemProps, FooterHeaderProps {}

const FooterLinksItem = ({ elements }: FooterLinksItemProps) => {
  const footerLinks = elements.map((element, index) => (
    <FooterLink key={index} to={element.to} text={element.text} />
  ));
  return <>{footerLinks}</>;
};

function FooterContainer({ footerElements }: FooterContainerProps) {
  const footerLinks = footerElements.map((footerElement, index) => (
    <Stack align={'flex-start'} key={index}>
      <FooterHeader headerText={footerElement.headerText} />
      <FooterLinksItem elements={footerElement.elements} />
    </Stack>
  ));

  return <>{footerLinks}</>;
}

export default FooterContainer;
