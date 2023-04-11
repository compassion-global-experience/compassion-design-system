import { MouseEvent, ButtonHTMLAttributes, ReactNode } from 'react';
export interface ButtonAttr extends ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export type ButtonProps = ButtonAttr & ({
    label: ReactNode;
    children?: never;
} | {
    children: ReactNode;
    label?: never;
});
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
