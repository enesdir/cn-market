import { chakra, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';

type Props = {
  display: string[];
};

// Create new Form component and pass it chakra props
const Form = chakra('form');

const SearchBar = ({ display }: Props) => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValue('');
    if (value !== '') router.push(`/search/${value}`);
  };
  return (
    <Form display={display} onSubmit={handleSubmit} w={['full', 'sm']} m="0 auto">
      <InputGroup>
        <InputLeftElement pointerEvents="none" icon={<HiSearch />} />
        <Input
          borderRadius="full"
          bg="blackAlpha.200"
          _focus={{
            borderColor: 'appBlue.400',
            boxShadow: '0 0 0 1px #3564e6',
          }}
          placeholder="Search Items"
          fontSize={['sm', 'md']}
          _placeholder={{
            color: 'gray.600',
          }}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
        <InputRightElement icon={<HiX />} />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
