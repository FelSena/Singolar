import { useContext, useEffect, useState } from "react";
import API from "../API";
import EditForm from "../editForm";
import PostCard from "../PostCard";
import { ModalContext } from "../Providers/ModalProvider";

const PostDetails = () => {
  const [editForm, setEditForm] = useState(false);
  const { modalItem } = useContext(ModalContext);
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
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        {editForm ? (
          <EditForm setEditForm={setEditForm} />
        ) : (
          <div>
            <span>
              <b>{modalItem.title}</b>
            </span>
            <span>{modalItem.body}</span>
            <span>Usuario: {modalItem.userId}</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {comments.map((comment) => (
                <span key={comment.id}>{comment.body}</span>
              ))}
              {userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
      <button onClick={() => setConfirmation(true)}>Deletar</button>
      <button
        onClick={() => {
          setEditForm(true);
        }}
      >
        Editar
      </button>
      {confirmation && (
        <div>
          <span>Tem certeza?</span>
          <button onClick={handleDelete}>Sim</button>
          <button onClick={() => setConfirmation(false)}>Nao</button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
