'use client';

import { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';
import styles from '@compassion-design-system/core/src/components/Form/textarea.module.css';
import common from '@compassion-design-system/core/src/components/Form/form-common.module.css';

import { FieldSize, FieldState, StateIcon } from './Helpers';
import { getClasses } from '../../utils/classes';

export interface TextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: FieldSize;
  state?: FieldState;
}

export interface TextAreaFieldProps extends TextAreaProps {
  label?: string;
  fieldClassName?: string;
  showCounter?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (props, ref) => {
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
    const containerClassNames = getClasses(
      common,
      'cds-form__field-row',
      className,
    );

    const labelClassNames = getClasses(common, [
      'cds-form__label',
      `cds-form--${state}`,
    ]);

    const helperClassNames = getClasses(common, [
      'cds-form__hint',
      `cds-form--${state}`,
    ]);

    const fieldClassNames = getClasses(
      common,
      ['cds-form__field', `cds-form--${state}`, `cds-form--${size}`],
      fieldClassName,
    );

    const onChangeCallback = useCallback(
      (e) => {
        setCount(e.target.value.length);
        onChange && onChange(e);
      },
      [onChange],
    );

    return (
      <div className={containerClassNames}>
        <div className={getClasses(common, 'cds-form__label-wrap')}>
          {label && (
            <label className={labelClassNames} htmlFor={id}>
              {label}
            </label>
          )}
          {showCounter && maxLength > 0 && (
            <span className={helperClassNames}>
              {count} / {maxLength}
            </span>
          )}
        </div>

        <div className={fieldClassNames}>
          <textarea
            id={id}
            ref={ref}
            disabled={state === 'disabled'}
            className={getClasses(styles, 'cds-form__input')}
            onChange={onChangeCallback}
            maxLength={maxLength}
            {...rest}
          />
          <StateIcon state={state} size={size} classes={styles} />
        </div>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
