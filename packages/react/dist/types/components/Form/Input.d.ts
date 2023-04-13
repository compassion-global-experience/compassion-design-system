import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldSize, FieldState } from './Helpers';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    type?: 'text' | 'email' | 'search' | 'password' | 'tel' | 'number' | 'url' | 'month' | 'time' | 'week' | 'date' | 'datetime-local' | 'color';
    size?: FieldSize;
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    state?: FieldState;
}
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
