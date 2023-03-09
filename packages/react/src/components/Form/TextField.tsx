import '@compassion-gds/css/src/components/Form/common.css';

import { FieldContainer, Input, InputProps } from './FormElements';

export interface TextFieldProps extends InputProps {
  label?: string;
  hint?: string,
  fieldClassName?: string,
}

const TextField = ({
  id,
  label = '',
  state,
  hint = '',
  className,
  fieldClassName,
  ...rest
}: TextFieldProps) => {
  return (
    <FieldContainer id={id} label={label} state={state} hint={hint} className={className}>
      <Input id={id} state={state} className={fieldClassName} {...rest} />
    </FieldContainer>
  );
};

export default TextField;
