/// <reference types="react" />
import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, MouseEvent, HTMLProps, HTMLAttributes, ExoticComponent, ReactElement, InputHTMLAttributes, CSSProperties, Ref } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: ReactNode;
    children?: ReactNode;
    mode?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type HtmlAttrWithoutOverriddenKeys = Omit<HTMLProps<HTMLDivElement>, 'title' | 'size'>;
interface ModalProps extends HtmlAttrWithoutOverriddenKeys {
    title?: ReactNode;
    size?: 'default' | 'small' | 'wide';
    footerSlot?: ReactNode;
    children: ReactNode;
    onClose?: () => void;
}
declare const Modal: react.ForwardRefExoticComponent<Pick<ModalProps, "label" | "children" | "size" | "disabled" | "onClick" | "autoFocus" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "cite" | "data" | "span" | "summary" | "pattern" | "list" | "default" | "muted" | "start" | "content" | "wrap" | "open" | "multiple" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "defer" | "download" | "encType" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "noValidate" | "optimum" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "step" | "target" | "useMap" | "width" | "wmode" | "key" | "footerSlot" | "onClose"> & react.RefAttributes<HTMLDivElement>>;

type IconFlavor = 'default' | 'muted' | 'primary';
interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    icon: ExoticComponent;
    size?: number | string | undefined;
    color?: string | undefined;
    mode?: IconFlavor;
}
declare const Icon: react.MemoExoticComponent<({ icon: IconComponent, size, color, className, mode, style }: IconProps) => JSX.Element>;

type FieldState = 'disabled' | 'error' | 'success';
type FieldSize = 'small' | 'medium' | 'large';
interface AdornmentProps {
    adornmentIcon?: ReactElement;
    adornmentPosition?: 'start' | 'end';
    adornmentText?: string;
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    type?: 'text' | 'email' | 'search' | 'password' | 'tel' | 'number' | 'url' | 'month' | 'time' | 'week' | 'date' | 'datetime-local' | 'color';
    size?: FieldSize;
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    state?: FieldState;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface TextFieldProps extends InputProps {
    label?: string;
    hint?: string;
    fieldClassName?: string;
}
declare const TextField: react.ForwardRefExoticComponent<TextFieldProps & react.RefAttributes<HTMLInputElement>>;

interface InputGroupProps extends TextFieldProps, AdornmentProps {
}
declare const InputGroup: react.ForwardRefExoticComponent<InputGroupProps & react.RefAttributes<HTMLInputElement>>;

interface TextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    size?: FieldSize;
    state?: FieldState;
}
interface TextAreaFieldProps extends TextAreaProps {
    label?: string;
    fieldClassName?: string;
    showCounter?: boolean;
}
declare const TextArea: react.ForwardRefExoticComponent<TextAreaFieldProps & react.RefAttributes<HTMLTextAreaElement>>;

interface SelectOptions {
    value: string;
    label: string;
}
interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
    id: string;
    options: SelectOptions[];
    defaultOption?: string;
    label?: string;
    size?: FieldSize;
    state?: FieldState;
    hint?: string;
    icon?: ReactElement;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface SelectFieldProps extends SelectProps {
    fieldClassName?: string;
}
declare const SelectField: react.ForwardRefExoticComponent<SelectFieldProps & react.RefAttributes<HTMLSelectElement>>;

interface SelectGroupProps extends SelectFieldProps, AdornmentProps {
}
declare const SelectGroup: react.ForwardRefExoticComponent<SelectGroupProps & react.RefAttributes<HTMLSelectElement>>;

interface ChoiceInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    id: string;
    type: 'checkbox' | 'radio';
    label: string;
    state?: FieldState;
    hint?: string;
}
declare const ChoiceInput: react.ForwardRefExoticComponent<ChoiceInputProps & react.RefAttributes<HTMLInputElement>>;

interface PinProps {
    pattern?: RegExp;
    autoFocus?: boolean;
    secret?: boolean;
    state?: FieldState;
    onComplete?: (value: string) => void;
}
interface PinFieldProps extends PinProps {
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

interface BasicRow {
    [key: string]: ReactNode | BasicRow;
    disabled?: boolean;
}
interface Column<Row extends BasicRow> {
    title: string;
    key: string;
    disabled?: boolean;
    headerRender?: (col: Column<Row>) => ReactElement;
    cellRender?: (col: Column<Row>, data: Row) => ReactNode;
}
interface TableProps<Row extends BasicRow> {
    columns: Column<Row>[];
    rows: Row[];
    disabled?: boolean;
    stickyHeader?: boolean;
    containerStyle?: CSSProperties;
    tableStyle?: CSSProperties;
    className?: string;
    forwardedRef?: Ref<HTMLTableElement>;
}
declare const _default: react.ForwardRefExoticComponent<TableProps<BasicRow> & react.RefAttributes<HTMLTableElement>>;

export { Button, ChoiceInput, Icon, Input, InputGroup, Modal, PinField, Select, SelectField, SelectGroup, _default as Table, TextArea, TextField };
