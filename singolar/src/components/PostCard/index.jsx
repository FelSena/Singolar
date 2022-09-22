import { useContext } from "react";
import { ModalContext } from "../Providers/ModalProvider";

const PostCard = ({ post }) => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <div>
      <h2>{post.title}</h2>
      <span>{post.body}</span>
      <button onClick={() => handleOpen(post)}>Ver mais</button>
    </div>
  );
};

export default PostCard;
