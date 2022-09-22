import { useContext, useEffect, useState } from "react";
import API from "../API";
import PostCard from "../PostCard";
import { ModalContext } from "../Providers/ModalProvider";

const PostDetails = () => {
  const [editForm, setEditForm] = useState(false);
  const { modalItem } = useContext(ModalContext);
  const [comments, setComments] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    API.get(`posts/${modalItem.id}/comments`).then((res) =>
      setComments(res.data)
    );
    API.get(`users/${modalItem.id}/posts`).then((res) =>
      setUserPosts(res.data)
    );
  }, [modalItem]);

  return (
    <div>
      <div>
        {editForm ? (
          <form>
            <input type="text" />
          </form>
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
      <button>Deletar</button>
      <button>Editar</button>
    </div>
  );
};

export default PostDetails;
