import { Button, ButtonProps, VisuallyHidden } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
  children: ReactNode;
  name: string;
}

export default function SocialButton(props: Props) {
  const { children, name, ...buttonProps } = props;
  return (
    <Button color="currentColor" variant="outline" {...buttonProps}>
      <VisuallyHidden>{name}</VisuallyHidden>
      {children}
    </Button>
  );
}
