import { Box, Button, Flex, Heading, Stack, Text, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

import { InputWithLeftElement } from '@/components/InputWithLeftElement';
import { AnimatedLogo } from '@/components/Logo/';
import { AuthLayout, AuthLayoutLink, PasswordField, SignInProviders, useAuth } from '@/features/auth/';

type LoginFormType = {
  email: string;
  password: string;
};

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = React.useState("");
  const { values, dirty, handleChange, handleSubmit } = useFormik<LoginFormType>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (formValues: LoginFormType) => {
      setIsLoading(true);
      login(formValues.email, formValues.password)
        .then(() => {
          setIsLoading(false);
          router.push('/');
        })
        .catch((err) => {
          toast({
            description: err.message,
            position: 'top',
            status: 'error',
            isClosable: true,
          });
          setIsLoading(false);
        });
    },
  });
  const { email, password } = values;
  return (
    <AuthLayout>
      <NextSeo title="Login" description="This will be the page meta description" />
      <Stack alignItems="center">
        <AnimatedLogo />
        <Heading align="center" fontSize="4xl" pb="4">
          Welcome back!
        </Heading>
      </Stack>
      <Stack spacing={4}>
        <InputWithLeftElement
          name="email"
          autoComplete="email"
          type="email"
          value={email}
          onChange={handleChange}
          formControlprops={{ id: 'email', isInvalid: false }}
          errorMessage="dd"
          inputLabel="EMAIL ADDRESS"
          icon={HiOutlineMail}
        />
        <PasswordField value={password} onChange={handleChange} />
        <Stack spacing={2}>
          <Flex justify="right">
            <Box>
              <AuthLayoutLink href="#"> Forgot Password? </AuthLayoutLink>
            </Box>
          </Flex>
          <Button
            bg="blue.400"
            color="white"
            _hover={{
              bg: 'blue.500',
            }}
            isLoading={isLoading}
            disabled={!dirty}
            onClick={() => handleSubmit()}
          >
            Sign in
          </Button>
          <Text fontSize="sm">
            Not Registered
            <AuthLayoutLink href="/auth/register"> Create an account </AuthLayoutLink>
          </Text>
        </Stack>
      </Stack>
      <SignInProviders />
    </AuthLayout>
  );
}
