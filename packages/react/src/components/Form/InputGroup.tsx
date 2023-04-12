import { forwardRef } from 'react';

import Input from './Input';
import { TextFieldProps } from './TextField';
import { InputGroupContainer, AdornmentProps } from './Helpers';

export interface InputGroupProps extends TextFieldProps, AdornmentProps {}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  (props, ref) => {
    const {
      id = '',
      label = '',
      state,
      size,
      hint = '',
      adornmentPosition = 'end',
      adornmentText = '',
      adornmentIcon,
      className,
      fieldClassName,
      ...rest
    } = props;

    return (
      <InputGroupContainer
        id={id}
        label={label}
        state={state}
        size={size}
        hint={hint}
        className={className}
        adornmentPosition={adornmentPosition}
        adornmentText={adornmentText}
        adornmentIcon={adornmentIcon}
      >
        <Input
          ref={ref}
          id={id}
          state={state}
          size={size}
          className={fieldClassName}
          {...rest}
        />
      </InputGroupContainer>
    );
  },
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
