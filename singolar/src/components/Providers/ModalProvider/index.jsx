import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const handleOpen = (props) => {
    setModal(true);
    props === true ? setModalCreate(true) : setModalItem(props);
  };
  const handleClose = () => {
    setModal(false);
    setModalCreate(false);
    setModalItem(null);
  };

  return (
    <ModalContext.Provider
      value={{ modal, handleOpen, handleClose, modalCreate, modalItem }}
    >
      {children}
    </ModalContext.Provider>
  );
};
