'use client';

import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '@compassion-design-system/core/src/components/Form/pin.module.css';
import common from '@compassion-design-system/core/src/components/Form/form-common.module.css';

import { FieldSize, FieldState } from './Helpers';
import { getClasses } from '../../utils/classes';

type Values = string[];

interface PinProps {
  pattern?: RegExp;
  autoFocus?: boolean;
  secret?: boolean;
  state?: FieldState;
  onComplete?: (value) => void;
}

interface PinHookProps extends PinProps {
  values?: Values;
  onChange?: (values: Values) => void;
}

export interface PinFieldProps extends PinProps {
  label?: string;
  value?: string;
  length?: number;
  size?: FieldSize;
  className?: string;
}

const PinField = ({
  label,
  value,
  length = 4,
  state,
  size,
  secret = false,
  autoFocus = false,
  pattern = DEFAULT_PATTERN,
  className,
  onComplete,
}: PinFieldProps) => {
  const containerClassNames = getClasses(
    styles,
    ['cds-form__pin-field', `cds-form--${size}`],
    className,
  );
  const fieldClassNames = getClasses(styles, [
    'cds-form__field',
    `cds-form--${state}`,
  ]);
  const labelClassNames = getClasses(common, [
    'cds-form__label',
    `cds-form--${state}`,
  ]);

  const [values, setValues] = useState(() =>
    Array.from({ length }).map((_, i) => value?.toString()[i] || ''),
  );

  const fields = usePinHook({
    values,
    autoFocus,
    secret,
    pattern,
    state,
    onChange: (v) => setValues(v),
    onComplete,
  });

  return (
    <div className={getClasses(common, 'cds-form__field-row')}>
      {label && <label className={labelClassNames}>{label}</label>}
      <div className={containerClassNames}>
        {fields.map((fieldProps, index) => (
          <div key={index} className={fieldClassNames}>
            <input
              className={getClasses(styles, 'cds-form__input')}
              {...fieldProps}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PinField.displayName = 'PinField';

const usePinHook = ({
  values,
  autoFocus,
  secret,
  state,
  pattern,
  onChange: onChangeProp,
  onComplete,
}: PinHookProps = {}) => {
  const disabled = state === 'disabled';

  const fieldRefs = useRef<HTMLInputElement[]>(Array(values.length).fill(null));

  const setFocus = useCallback((index = 0) => {
    fieldRefs.current[index]?.focus();
  }, []);

  useEffect(() => {
    if (autoFocus) setFocus();
  }, [autoFocus, setFocus]);

  const setFieldRef = useCallback(
    (index: number) => (ref: HTMLInputElement) => {
      fieldRefs.current[index] = ref;
    },
    [],
  );

  const onChange = useCallback(
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;

      value = value.trim();

      if (!pattern.test(value)) return;

      const nextValues = values.slice();
      nextValues[index] = value;
      onChangeProp(nextValues);

      if (value) {
        if (!nextValues.includes('')) {
          onComplete?.(nextValues.join(''));
        }

        if (index !== values.length - 1) {
          setFocus(index + 1);
        }
      }
    },
    [pattern, values, onChangeProp, onComplete, setFocus],
  );

  const onKeyDown = useCallback(
    (index: number) => (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && !values[index] && index) {
        setFocus(index - 1);
      }
    },
    [values, setFocus],
  );

  const fields = values.map((value: string, index: number) => ({
    ref: setFieldRef(index),
    value,
    disabled,
    autoComplete: 'off',
    maxLength: 1,
    type: secret ? 'password' : 'text',
    ...(!disabled && {
      onChange: onChange(index),
      onKeyDown: onKeyDown(index),
    }),
  }));

  return fields;
};

const DEFAULT_PATTERN = /.*/;

export default PinField;
