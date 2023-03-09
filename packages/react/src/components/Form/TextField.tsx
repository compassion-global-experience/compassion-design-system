import '@compassion-gds/css/src/components/Form/common.css';

import Input, { InputProps } from './Input';

interface TextFieldContainerProps extends InputProps {
  label?: string;
  hint?: string,
}

export interface TextFieldProps extends TextFieldContainerProps {
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
    <TextFieldContainer id={id} label={label} state={state} hint={hint} className={className}>
      <Input id={id} state={state} className={fieldClassName} {...rest} />
    </TextFieldContainer>
  );
};

export const TextFieldContainer = ({
  id,
  label = '',
  state,
  hint = '',
  className,
  children,
}: TextFieldContainerProps) => {
  const containerClassNames =  ['form-field-row', className].join(' ');
  const labelClassNames = ['form-label', state].join(' ');
  const helperClassNames = ['form-hint', state].join(' ');

  return (
    <div className={containerClassNames}>
      {label && <label className={labelClassNames} htmlFor={id}>{label}</label>}
      {children}
      {hint && <span className={helperClassNames}>{hint}</span>}
    </div>
  );
};

export default TextField;
