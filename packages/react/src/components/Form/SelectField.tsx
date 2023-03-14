import { forwardRef } from 'react';
import '@compassion-gds/css/src/components/Form/common.css';

import { FieldContainer } from './Helpers';
import Select, { SelectProps } from './Select';

const SelectField = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
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
    <FieldContainer id={id} label={label} state={state} hint={hint} className={className}>
      <Select ref={ref} id={id} className={fieldClassName} state={state} {...rest} />
    </FieldContainer>
  );
});

SelectField.displayName = 'SelectField';


export default SelectField;
