import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import '@compassion-gds/css/src/components/Form/common.module.css';
import { FieldSize, FieldState, StateIcon } from './Helpers';

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
      {iconLeft && <FieldIcon icon={iconLeft} />}
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
      {iconRight && <FieldIcon icon={iconRight} />}
      <StateIcon state={state} size={size} />
    </div>
  );
});

Input.displayName = 'Input';

const FieldIcon = (props: { icon?: ReactElement }) => (
  <span className="form-icon">{props.icon}</span>
);

export default Input;
