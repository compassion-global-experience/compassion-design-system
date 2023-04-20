import { InputHTMLAttributes } from 'react';
import { FieldSize, FieldState } from './Helpers';
export interface TextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    size?: FieldSize;
    state?: FieldState;
}
export interface TextAreaFieldProps extends TextAreaProps {
    label?: string;
    fieldClassName?: string;
    showCounter?: boolean;
}
declare const TextArea: import("react").ForwardRefExoticComponent<TextAreaFieldProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
