import { useEffect, useState } from "react";
import API from "../API";
import PostCard from "../PostCard";

const Post = () => {
  const [data, setData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    API.get("posts").then((res) => {
      setData(res.data);
      setIsMounted(true);
    });
  }, []);
  return (
    <>
      {isMounted && data.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
};

export default Post;
