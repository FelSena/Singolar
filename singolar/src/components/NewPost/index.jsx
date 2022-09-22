import { useForm } from "react-hook-form";
import API from "../API";

const NewPost = () => {
  const { register, handleSubmit } = useForm();
  const createPost = (data) => {
    const newData = { userId: 1, ...data };
    API.post("posts", newData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    //FALTA TRABALHAR O POP-UP SUCESS
  };
  return (
    <form onSubmit={handleSubmit(createPost)}>
      <input {...register("title")} required />
      <input {...register("body")} required />

      <button type="submit">Postar!</button>
    </form>
  );
};

export default NewPost;
