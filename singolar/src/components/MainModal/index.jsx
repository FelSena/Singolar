import { useContext } from "react";
import NewPost from "../NewPost";
import PostDetails from "../PostDetails";
import { ModalContext } from "../Providers/ModalProvider";
import { ThemeButton } from "../Styles/Globals";
import { ModalBg, ModalBox } from "./style";

const MainModal = () => {
  const { modal, modalCreate, handleClose } = useContext(ModalContext);

  return (
    <>
      {modal && (
        <ModalBg>
          <ModalBox>
            {modalCreate ? <NewPost /> : <PostDetails />}
            <ThemeButton onClick={handleClose} bgColor="#0096FA">
              Fechar
            </ThemeButton>
          </ModalBox>
        </ModalBg>
      )}
    </>
  );
};

export default MainModal;
