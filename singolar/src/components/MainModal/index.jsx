import { useContext } from "react";
import NewPost from "../NewPost";
import { ModalContext } from "../Providers/ModalProvider";

const MainModal = () => {
  const { modal, modalCreate } = useContext(ModalContext);

  return (
    <>
      {modal && (
        <>
          {modalCreate ? (
            <NewPost />
          ) : (
            <div>
              <span>Modal Details</span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MainModal;
