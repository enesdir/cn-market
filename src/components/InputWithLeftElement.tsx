import {
  Flex,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  useMergeRefs,
} from '@chakra-ui/react';
import { As } from '@chakra-ui/system';
import * as React from 'react';

interface Props extends InputProps {
  errorMessage?: string;
  formControlprops?: FormControlProps;
  inputLabel: string;
  icon: As;
}

export const InputWithLeftElement = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { inputLabel, icon, errorMessage, formControlprops, ...inputProps } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const mergeRef = useMergeRefs(inputRef, ref);

  return (
    <FormControl {...formControlprops}>
      <Flex justify="space-between">
        <FormLabel>{inputLabel}</FormLabel>
      </Flex>
      <InputGroup>
        <InputLeftElement>
          <Icon as={icon} />
        </InputLeftElement>
        <Input ref={mergeRef} required {...inputProps} />
      </InputGroup>
      <FormErrorMessage> {errorMessage} </FormErrorMessage>
    </FormControl>
  );
});

InputWithLeftElement.displayName = 'InputWithLeftElement';
