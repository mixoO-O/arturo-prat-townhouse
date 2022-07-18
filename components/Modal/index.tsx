import React, { CSSProperties } from 'react';
import { Modal, ModalProps } from 'rsuite';
import CloseIcon from '@rsuite/icons/Close';

interface IModalProps extends ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  style?: CSSProperties;
}

const buttonStyle = {
  width: 35,
  height: 35,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  color: '#0D1136',
  border: 0,
  outline: 0,
  boxShadow: 'none',
  borderRadius: '50%',
  position: 'fixed' as 'fixed',
  top: '20px',
  right: '35px',
  zIndex: 100000,
  cursor: 'pointer',

  ':focus': {
    outline: 0,
    boxShadow: 'none',
  },
};

const CenterModal: React.FC<IModalProps> = props => {
  const { isOpen, onRequestClose, children, ...modalProps } = props;

  return (
    <Modal open={isOpen} onHide={onRequestClose} style={{ backgroundColor: '#000000ab' }} {...modalProps}>
      <button type='button' onClick={onRequestClose} style={{ ...buttonStyle }}>
        <CloseIcon />
      </button>
      {children}
    </Modal>
  );
};

export default CenterModal;
