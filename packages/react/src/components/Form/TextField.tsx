'use client';

import { forwardRef } from 'react';
import '@compassion-design-system/core/src/components/Form/form-common.module.css';

import Input, { InputProps } from './Input';
import { FieldContainer } from './Helpers';

export interface TextFieldProps extends InputProps {
  label?: string;
  hint?: string;
  fieldClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id,
    label = '',
    state,
    hint = '',
    className,
    fieldClassName,
    ...rest
  } = props;

  return (
    <FieldContainer
      id={id}
      label={label}
      state={state}
      hint={hint}
      className={className}
    >
      <Input
        ref={ref}
        id={id}
        state={state}
        className={fieldClassName}
        {...rest}
      />
    </FieldContainer>
  );
});

TextField.displayName = 'TextField';

export default TextField;
