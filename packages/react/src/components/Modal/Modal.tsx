import { CSSProperties, MouseEvent, ReactNode } from 'react';
import '@compassion-gds/css/src/components/Modal/modal.css';
import { X } from '../icons';

export interface ModalProps {
  title?: ReactNode,
  size?: 'default' | 'small' | 'wide',
  footerSlot?: ReactNode,
  children: ReactNode,
  onClose?: () => void,
  className?: string,
  style?: CSSProperties,
}

const Modal = ({ title = '', size = 'default', onClose, footerSlot, className, style, children }: ModalProps) => {
    const classNames = ['modal', size, className].join(' ');

    return (
      <div className={classNames} style={style}>
        {onClose && <ModalClose onClick={onClose} />}
        {title && <div className="modal-header">{title}</div>}
        <div className="modal-body">{children}</div>
        {Boolean(footerSlot) && <div className="modal-footer">{footerSlot}</div>}
      </div>
  );
};

export interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

const ModalClose = ({ onClick }: ButtonProps) => (
  <button type="button" className="modal-button-close" onClick={onClick}>
    <X size={24} />
  </button>
);

export default Modal;
