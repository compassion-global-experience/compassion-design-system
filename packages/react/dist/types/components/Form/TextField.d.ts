/// <reference types="react" />
import '@compassion-gds/core/src/components/Form/common.module.css';
import { InputProps } from './Input';
export interface TextFieldProps extends InputProps {
    label?: string;
    hint?: string;
    fieldClassName?: string;
}
declare const TextField: import("react").ForwardRefExoticComponent<TextFieldProps & import("react").RefAttributes<HTMLInputElement>>;
export default TextField;
