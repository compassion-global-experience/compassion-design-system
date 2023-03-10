import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import '@compassion-gds/css/src/components/Form/common.css';
import { Check, X } from '../icons';
import { FieldSize, FieldState } from './Helpers';

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

const StateIcon = (props: { state?: FieldState; size?: FieldSize }) => {
  const iconSize = props.size === 'small' ? 16 : 20;
  let icon;

  if (props.state === 'success') icon = <Check size={iconSize} />;
  if (props.state === 'error') icon = <X size={iconSize} />;

  if (!icon) return null;

  return <span className="form-icon">{icon}</span>;
};

const FieldIcon = (props: { icon?: ReactElement }) => (
  <span className="form-icon">{props.icon}</span>
);

export default Input;
