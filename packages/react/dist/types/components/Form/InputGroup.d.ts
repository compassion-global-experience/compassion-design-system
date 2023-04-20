/// <reference types="react" />
import { TextFieldProps } from './TextField';
import { AdornmentProps } from './Helpers';
export interface InputGroupProps extends TextFieldProps, AdornmentProps {
}
declare const InputGroup: import("react").ForwardRefExoticComponent<InputGroupProps & import("react").RefAttributes<HTMLInputElement>>;
export default InputGroup;
