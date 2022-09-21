const PostCard = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <span>{post.body}</span>
    </div>
  );
};

export default PostCard;
