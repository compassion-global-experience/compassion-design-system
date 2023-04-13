/// <reference types="react" />
import { SelectProps } from './Select';
export interface SelectFieldProps extends SelectProps {
    fieldClassName?: string;
}
declare const SelectField: import("react").ForwardRefExoticComponent<SelectFieldProps & import("react").RefAttributes<HTMLSelectElement>>;
export default SelectField;
