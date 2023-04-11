import { ReactElement } from 'react';
export type FieldState = 'disabled' | 'error' | 'success';
export type FieldSize = 'small' | 'medium' | 'large';
interface FieldContainerProps {
    id: string;
    label?: string;
    state?: FieldState;
    hint?: string;
    className?: string;
    children: ReactElement;
}
export interface AdornmentProps {
    adornmentIcon?: ReactElement;
    adornmentPosition?: 'start' | 'end';
    adornmentText?: string;
}
export interface InputGroupContainerProps extends FieldContainerProps, AdornmentProps {
    size?: FieldSize;
}
export declare const FieldContainer: ({ id, label, state, hint, className, children, }: FieldContainerProps) => JSX.Element;
export declare const InputGroupContainer: ({ id, label, state, hint, adornmentPosition, adornmentText, adornmentIcon, className, size, children, }: InputGroupContainerProps) => JSX.Element;
export declare const StateIcon: (props: {
    state?: FieldState;
    size?: FieldSize;
    classes?: Record<string, string>;
}) => JSX.Element;
export {};
