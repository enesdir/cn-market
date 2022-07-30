import { SimpleGrid, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

import { useAuth } from '@/contexts/AuthProvider';

import { DividerWithText } from '@/components/auth/DividerWithText';
import SocialButton from '@/components/auth/SocialButton';

function SignInProviders() {
  const toast = useToast();
  const { signInWithGoogle } = useAuth();
  const handleLoginWithGoogle = () => {
    signInWithGoogle(toast);
  };

  useEffect(() => {
    return () => {
      toast.closeAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DividerWithText mt="6">or continue with</DividerWithText>
      <SimpleGrid mt="6" columns={3} spacing="3">
        <SocialButton name="Login with Facebook">
          <FaFacebook />
        </SocialButton>
        <SocialButton name="Login with Google" onClick={handleLoginWithGoogle}>
          <FaGoogle />
        </SocialButton>
        <SocialButton name="Login with Github">
          <FaGithub />
        </SocialButton>
      </SimpleGrid>
    </>
  );
}

export default SignInProviders;
