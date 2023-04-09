import { forwardRef } from 'react';

import { SelectFieldProps } from './SelectField';
import { InputGroupContainer, AdornmentProps } from './Helpers';
import Select from './Select';

export interface SelectGroupProps extends SelectFieldProps, AdornmentProps {}

const SelectGroup = forwardRef<HTMLSelectElement, SelectGroupProps>(
  (props, ref) => {
    const {
      id,
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
        <Select
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

SelectGroup.displayName = 'SelectGroup';

export default SelectGroup;
