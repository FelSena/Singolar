import { useContext } from "react";
import NewPost from "../NewPost";
import PostDetails from "../PostDetails";
import { ModalContext } from "../Providers/ModalProvider";

const MainModal = () => {
  const { modal, modalCreate } = useContext(ModalContext);

  return <>{modal && <>{modalCreate ? <NewPost /> : <PostDetails />}</>}</>;
};

export default MainModal;
