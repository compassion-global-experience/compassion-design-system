import { ReactElement } from 'react';
import '@compassion-gds/css/src/components/Form/input-group.css';

import Input from './Input';
import { TextFieldProps, TextFieldContainer } from './TextField';
import { Info } from '../icons';

export interface InputGroupProps extends TextFieldProps {
  adornmentIcon?: ReactElement,
  adornmentPosition?: 'start' | 'end',
  adornmentText?: string,
}

const InputGroup = ({
  id,
  label = '',
  state,
  hint = '',
  adornmentPosition = 'end',
  adornmentText = '',
  adornmentIcon,
  className,
  fieldClassName,
  size,
  ...rest
}: InputGroupProps) => {
  const startPosition = adornmentPosition === 'start';

  return (
    <TextFieldContainer id={id} label={label} state={state} hint={hint} className={className}>
      <div className="input-group">
        {startPosition && <Adornment icon={adornmentIcon} text={adornmentText} size={size} />}
        <Input id={id} state={state} className={fieldClassName} size={size} {...rest} />
        {!startPosition && <Adornment icon={adornmentIcon} text={adornmentText} size={size} />}
      </div>
    </TextFieldContainer>
  );
};

const Adornment = ({ icon, text, size }: { icon: ReactElement, text: string, size: string }) => (
  <div className={['input-group-adornment', size].join(' ')}>
    {icon || <Info size={22} />}
    {text && <span className="input-group-adornment-text">{text}</span>}
  </div>
);

export default InputGroup;
