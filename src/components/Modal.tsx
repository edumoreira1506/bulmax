import React, { ReactElement } from "react";
import {
  isActive,
  modalBackground,
  modalContent,
  modalClose,
  isLarge,
  modal,
} from "../classes";
import classNames from "classnames";

interface ModalContentProps {
  children: ReactElement | ReactElement[]
}

interface ModalProps {
  children: ReactElement | ReactElement[]
  active: boolean
}

interface ModalCloseProps {
  large?: boolean
  onClose(): void
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => (
  <div className={modalContent}>
    { children }
  </div>
);

export const ModalBackground: React.FC = () => (
  <div className={modalBackground} />
);

export const ModalClose: React.FC<ModalCloseProps> = ({ large, onClose }) => {
  const classes = classNames({
    [modalClose]: true,
    [isLarge]: large,
  });

  return (
    <button className={classes} aria-label="close" onClick={onClose} />
  )
};

export const Modal: React.FC<ModalProps> = ({ children, active }) => {
  const classes = classNames({
    [modal]: true,
    [isActive]: active,
  });

  return open
    ? (
      <div className={classes}>
        { children }
      </div>
    )
    : null
};
