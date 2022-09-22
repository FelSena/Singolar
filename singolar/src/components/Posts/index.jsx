import { useEffect, useState } from "react";
import API from "../API";
import PostCard from "../PostCard";

const PostList = () => {
  const [data, setData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    API.get("posts").then((res) => {
      setData(res.data);
      setIsMounted(true);
    });
  }, []);
  return (
    <div className="App">
      {isMounted && data.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
