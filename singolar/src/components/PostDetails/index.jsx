import { useContext, useEffect, useState } from "react";
import API from "../API";
import EditForm from "../EditForm";
import { ModalBg, ModalBox } from "../MainModal/style";
import PostCard from "../PostCard";
import { ModalContext } from "../Providers/ModalProvider";
import {
  Column,
  Row,
  ThemeButton,
  ThemeH2,
  ThemeSpan,
} from "../Styles/Globals";
import { Avatar, CommentBox, CustomLink, DetailsBox } from "./style";
import avatar from "../../assets/userAvatar.png";
import { toast } from "react-toastify";

const PostDetails = () => {
  const [editForm, setEditForm] = useState(false);
  const { modalItem, handleClose } = useContext(ModalContext);
  const [comments, setComments] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    API.get(`posts/${modalItem.id}/comments`).then((res) =>
      setComments(res.data)
    );
    API.get(`users/${modalItem.id}/posts`).then((res) =>
      setUserPosts(res.data)
    );
  }, [modalItem]);

  const handleDelete = () => {
    API.delete(`posts/${modalItem.id}`)
      .then((res) => {
        res.status === 200 && toast.success("Post Deletado!");
        handleClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <DetailsBox>
      <div>
        {editForm ? (
          <EditForm setEditForm={setEditForm} />
        ) : (
          <Column gap="30px">
            <ThemeH2>Post Criado por: </ThemeH2>
            <CustomLink to="/user" state={{ userId: modalItem.userId }}>
              <Avatar img={avatar} />
              <ThemeSpan>Usuário {modalItem.userId}</ThemeSpan>
            </CustomLink>
            <Column gap="20px">
              <ThemeH2 color="#d69c27">Titúlo: {modalItem.title}</ThemeH2>
              <ThemeSpan>Conteúdo: {modalItem.body}</ThemeSpan>
              <Row justify="space-evenly">
                <ThemeButton onClick={() => setConfirmation(true)}>
                  Deletar
                </ThemeButton>
                <ThemeButton
                  onClick={() => {
                    setEditForm(true);
                  }}
                >
                  Editar
                </ThemeButton>
              </Row>
              <Column gap="15px">
                <ThemeH2 color="#0096FA">Comentários relevantes:</ThemeH2>
                {comments.map((comment) => (
                  <CommentBox key={comment.id}>
                    <Column items="flex-start" padding="0 5px">
                      <ThemeSpan color="#0096FA">
                        {comment.name.slice(0, 10)} comentou:
                      </ThemeSpan>
                      <ThemeSpan>{comment.body}</ThemeSpan>
                    </Column>
                  </CommentBox>
                ))}
                <ThemeH2 color="#d69c27">Veja mais post deste usuário:</ThemeH2>
                {userPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </Column>
            </Column>
          </Column>
        )}
      </div>
      {confirmation && (
        <ModalBg>
          <ModalBox>
            <ThemeH2 color="#0096FA">Tem certeza?</ThemeH2>
            <ThemeButton onClick={handleDelete}>Sim</ThemeButton>
            <ThemeButton onClick={() => setConfirmation(false)}>
              Não
            </ThemeButton>
          </ModalBox>
        </ModalBg>
      )}
    </DetailsBox>
  );
};

export default PostDetails;
