import { useContext } from "react";
import { ModalContext } from "../Providers/ModalProvider";

const PostCreate = () => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <div>
      <button onClick={() => handleOpen(true)}>Criar um Post</button>
    </div>
  );
};

export default PostCreate;
