import { useContext } from "react";
import { ModalContext } from "../Providers/ModalProvider";
import { Column, ThemeH2, ThemeSpan } from "../Styles/Globals";
import { PostBox, ViewMore } from "./style";

const PostCard = ({ post }) => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <PostBox>
      <Column justify="space-evenly" items="flex-start">
        <ThemeH2 color="#d69c27">{post.title}</ThemeH2>
        <ThemeSpan>{post.body}</ThemeSpan>
      </Column>
      <ViewMore onClick={() => handleOpen(post)}>Ver mais</ViewMore>
    </PostBox>
  );
};

export default PostCard;
