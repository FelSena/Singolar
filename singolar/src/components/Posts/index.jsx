import { useEffect, useState } from "react";
import API from "../API";
import PostCard from "../PostCard";

const PostList = () => {
  const [data, setData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    API.get().then((res) => {
      setData(res.data);
      setIsMounted(true);
    });
  }, []);
  return (
    <div className="App">
      {isMounted && data.map((post) => <PostCard post={post} />)}
    </div>
  );
};

export default PostList;
