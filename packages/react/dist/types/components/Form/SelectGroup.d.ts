/// <reference types="react" />
import { SelectFieldProps } from './SelectField';
import { AdornmentProps } from './Helpers';
export interface SelectGroupProps extends SelectFieldProps, AdornmentProps {
}
declare const SelectGroup: import("react").ForwardRefExoticComponent<SelectGroupProps & import("react").RefAttributes<HTMLSelectElement>>;
export default SelectGroup;
