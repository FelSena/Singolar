import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const handleOpen = (create) => {
    setModal(true);
    create === true && setModalCreate(true);
  };
  const handleClose = () => {
    setModal(false);
    setModalCreate(false);
  };

  return (
    <ModalContext.Provider
      value={{ modal, handleOpen, handleClose, modalCreate }}
    >
      {children}
    </ModalContext.Provider>
  );
};
