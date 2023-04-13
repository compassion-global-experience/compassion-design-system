import { InputHTMLAttributes } from 'react';
import { FieldState } from './Helpers';
export interface ChoiceInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    id: string;
    type: 'checkbox' | 'radio';
    label: string;
    state?: FieldState;
    hint?: string;
}
declare const ChoiceInput: import("react").ForwardRefExoticComponent<ChoiceInputProps & import("react").RefAttributes<HTMLInputElement>>;
export default ChoiceInput;
