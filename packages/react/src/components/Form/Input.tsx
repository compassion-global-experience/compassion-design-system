import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import '@compassion-gds/css/src/components/Form/common.css';
import { Check, X } from '../icons';

type FieldState = 'disabled' | 'error' | 'success';
type FieldSize = 'small' | 'medium' | 'large';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
  size?: FieldSize;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  state?: FieldState;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
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
  } = props;
  const fieldClassNames = ['form-field', state, size, className].join(' ');

  return (
    <div className={fieldClassNames}>
      <FieldIcon size={size} icon={iconLeft} />
      <input
        ref={ref}
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
});

Input.displayName = 'Input';

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

export default Input;
