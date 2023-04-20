import { HTMLAttributes, ExoticComponent } from 'react';
type IconFlavor = 'default' | 'muted' | 'primary';
interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    icon: ExoticComponent;
    size?: number | string | undefined;
    color?: string | undefined;
    mode?: IconFlavor;
}
declare const Icon: import("react").MemoExoticComponent<({ icon: IconComponent, size, color, className, mode, style }: IconProps) => JSX.Element>;
export default Icon;
