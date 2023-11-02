'use client';

import { forwardRef, MouseEvent, ReactNode, HTMLProps } from 'react';
import styles from '@compassion-design-system/core/src/components/Modal/modal.module.css';
import { X } from '../icons';
import { getClasses } from '../../utils/classes';

type HtmlAttrWithoutOverriddenKeys = Omit<
  HTMLProps<HTMLDivElement>,
  'title' | 'size'
>;

export interface ModalProps extends HtmlAttrWithoutOverriddenKeys {
  title?: ReactNode;
  size?: 'default' | 'small' | 'wide';
  footerSlot?: ReactNode;
  children: ReactNode;
  onClose?: () => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    title = '',
    size = 'default',
    onClose,
    footerSlot,
    className,
    style,
    children,
    ...rest
  } = props;
  const wrapperClass = getClasses(
    styles,
    ['cds-modal', `cds-modal--${size}`],
    className,
  );
  const bodyClass = getClasses(styles, 'cds-modal__body');

  return (
    <div className={wrapperClass} style={style} ref={ref} {...rest}>
      {onClose && <ModalClose onClick={onClose} />}
      {title && (
        <div className={getClasses(styles, 'cds-modal__header')}>{title}</div>
      )}
      <div className={bodyClass}>{children}</div>
      {Boolean(footerSlot) && (
        <div className={getClasses(styles, 'cds-modal__footer')}>
          {footerSlot}
        </div>
      )}
    </div>
  );
});

Modal.displayName = 'Modal';

export interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ModalClose = ({ onClick }: ButtonProps) => (
  <button
    type="button"
    className={getClasses(styles, 'cds-modal__button--close')}
    onClick={onClick}
  >
    <X size={24} />
  </button>
);

export default Modal;
