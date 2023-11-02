'use client';

import { forwardRef } from 'react';

import { FieldContainer } from './Helpers';
import Select, { SelectProps } from './Select';

export interface SelectFieldProps extends SelectProps {
  fieldClassName?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
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
        <Select
          ref={ref}
          id={id}
          className={fieldClassName}
          state={state}
          {...rest}
        />
      </FieldContainer>
    );
  },
);

SelectField.displayName = 'SelectField';

export default SelectField;
