import { Box, Button, Flex, Heading, SimpleGrid, Stack, Text, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi';

import { InputWithLeftElement } from '@/components/InputWithLeftElement';
import { AnimatedLogo } from '@/components/Logo/';
import { AuthLayout, AuthLayoutLink, PasswordField, SignInProviders, useAuth } from '@/features/auth/';

type RegisterFormType = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const router = useRouter();
  const toast = useToast();
  const { signup } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, dirty, handleChange, handleSubmit } = useFormik<RegisterFormType>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (formValues: RegisterFormType) => {
      setIsLoading(true);
      await signup(formValues.email, formValues.password, formValues.name)
        .then(() => {
          setIsLoading(false);
          toast({
            title: 'Registration Successful',
            position: 'top',
            status: 'success',
            isClosable: true,
          });
          toast({
            title: `A verification email is sent to ${formValues.email}`,
            description: 'Before you can use any features, please verify your email first.',
            position: 'top',
            status: 'warning',
            isClosable: true,
          });
          router.push('/');
        })
        .catch((err) => {
          setIsLoading(false);
          toast({
            description: err.message,
            position: 'top',
            status: 'error',
            isClosable: true,
          });
        });
    },
  });
  const { name, email, password } = values;

  return (
    <AuthLayout>
      <NextSeo title="Register" description="This will be the page meta description" />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Stack maxW="32rem" alignItems="center">
          <AnimatedLogo />
          <Heading align="center" fontSize="2xl" pt="4">
            Welcome to Store App!
          </Heading>
          <Text border="1px" borderColor="blue.400" bg="blue.100" w="100%" align="center">
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Text>
          <Text>
            Already signed up?
            <AuthLayoutLink href="/auth/login"> Login to your account.</AuthLayoutLink>
          </Text>
        </Stack>
        <Stack spacing={4}>
          <InputWithLeftElement
            name="name"
            autoComplete="name"
            type="text"
            value={name}
            onChange={handleChange}
            formControlprops={{ id: 'name', isInvalid: false }}
            inputLabel="What's your name?"
            icon={HiOutlineUser}
          />
          <InputWithLeftElement
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            onChange={handleChange}
            formControlprops={{ id: 'email', isInvalid: false }}
            inputLabel="E-Mail Address"
            icon={HiOutlineMail}
          />
          <PasswordField value={password} onChange={handleChange} />
          <Stack spacing={6}>
            <Flex justify="right">
              <Box>
                <AuthLayoutLink href="#">Forgot Password?</AuthLayoutLink>
              </Box>
            </Flex>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500',
              }}
              disabled={!dirty}
              isLoading={isLoading}
              onClick={() => handleSubmit()}
            >
              GET STARTED
            </Button>
          </Stack>

          <SignInProviders />
        </Stack>
      </SimpleGrid>
    </AuthLayout>
  );
}
