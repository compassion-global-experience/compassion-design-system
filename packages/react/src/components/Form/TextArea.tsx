import {forwardRef, InputHTMLAttributes, useCallback, useState} from 'react';
import '@compassion-gds/css/src/components/Form/textarea.css';

import { FieldSize, FieldState, StateIcon } from './Helpers';

export interface TextAreaProps
    extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: FieldSize;
  state?: FieldState;
}

export interface TextAreaFieldProps extends TextAreaProps {
  label?: string;
  fieldClassName?: string;
  showCounter?: boolean,
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>((props, ref) => {
  const {
    id,
    label = '',
    state,
    size,
    className,
    fieldClassName,
    maxLength,
    onChange,
    showCounter,
    ...rest
  } = props;
  const [count, setCount] = useState(0);

  const containerClassNames =  ['form-field-row', className].join(' ');
  const labelClassNames = ['form-label', state].join(' ');
  const helperClassNames = ['form-hint', state].join(' ');
  const fieldClassNames = ['form-field', state, size, fieldClassName].join(' ');

  const onChangeCallback = useCallback(e => {
    setCount(e.target.value.length);
    onChange && onChange(e);
  }, [onChange]);

  return (
    <div className={containerClassNames}>
      <div className="form-label-wrap">
        {
          label && (
            <label className={labelClassNames} htmlFor={id}>
              {label}
            </label>
          )
        }
        {
          showCounter && maxLength > 0 && (
            <span className={helperClassNames}>{count} / {maxLength}</span>
          )
        }
      </div>

      <div className={fieldClassNames}>
        <textarea
          id={id}
          ref={ref}
          disabled={state === 'disabled'}
          className="form-input"
          onChange={onChangeCallback}
          maxLength={maxLength}
          {...rest}
        />
        <StateIcon state={state} size={size} />
      </div>
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
