/// <reference types="react" />
import { FieldSize, FieldState } from './Helpers';
interface PinProps {
    pattern?: RegExp;
    autoFocus?: boolean;
    secret?: boolean;
    state?: FieldState;
    onComplete?: (value: any) => void;
}
export interface PinFieldProps extends PinProps {
    label?: string;
    value?: string;
    length?: number;
    size?: FieldSize;
    className?: string;
}
declare const PinField: {
    ({ label, value, length, state, size, secret, autoFocus, pattern, className, onComplete, }: PinFieldProps): JSX.Element;
    displayName: string;
};
export default PinField;
