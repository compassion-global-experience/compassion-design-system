import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldSize, FieldState } from './Helpers';
interface SelectOptions {
    value: string;
    label: string;
}
export interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
    id: string;
    options: SelectOptions[];
    defaultOption?: string;
    label?: string;
    size?: FieldSize;
    state?: FieldState;
    hint?: string;
    icon?: ReactElement;
}
declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export default Select;
