import { HTMLAttributes, ReactElement } from 'react';
import '@compassion-gds/css/src/components/Form/common.css';
import { Check, X } from '../icons';

type FieldState = 'disabled' | 'error' | 'success';
type FieldSize = 'small' | 'medium' | 'large';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string,
  type?:
      | 'text'
      | 'email'
      | 'search'
      | 'password'
      | 'tel'
      | 'number'
      | 'url'
      | 'month'
      | 'time'
      | 'week'
      | 'date'
      | 'datetime-local'
      | 'color';
  size?: FieldSize,
  iconLeft?: ReactElement,
  iconRight?: ReactElement,
  state?: FieldState,
  className?: string,
}

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
  const containerClassNames =  ['form-field-row', className].join(' ');
  const labelClassNames = ['form-label', state].join(' ');
  const helperClassNames = ['form-hint', state].join(' ');

  return (
    <div className={containerClassNames}>
      {label && <label className={labelClassNames} htmlFor={id}>{label}</label>}
      <Input id={id} state={state} className={fieldClassName} {...rest} />
      {hint && <span className={helperClassNames}>{hint}</span>}
    </div>
  );
};

export const Input = ({
   id,
   state,
   type = 'text',
   placeholder = '',
   defaultValue = '',
   size = 'medium',
   iconRight,
   iconLeft,
   className,
    ...rest
}: InputProps) => {
  const fieldClassNames = ['form-field', state, size, className].join(' ');

  return (
    <div className={fieldClassNames}>
      <FieldIcon size={size} icon={iconLeft} />
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={state === 'disabled'}
        className="form-input"
        {...rest}
      />
      <FieldIcon size={size} state={state} icon={iconRight} />
    </div>
  );
};

const FieldIcon = ({ state, size = 'medium', icon }: { state?: FieldState, size?: FieldSize, icon?: ReactElement }) => {
  let defaultIcon = icon;
  const iconSize = size === 'small' ? 16 : 20;


  if (state === FIELD_STATE.SUCCESS) defaultIcon = <Check size={iconSize} />;
  if (state === FIELD_STATE.ERROR) defaultIcon = <X size={iconSize} />;

  if (!defaultIcon) return null;

  return <span className="form-icon">{defaultIcon}</span>;
};

const FIELD_STATE = {
  SUCCESS: 'success',
  ERROR: 'error',
  DISABLED: 'disabled',
};

export default TextField;
