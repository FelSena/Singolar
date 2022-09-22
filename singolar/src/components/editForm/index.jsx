import { useContext } from "react";
import { useForm } from "react-hook-form";
import API from "../API";
import { ModalContext } from "../Providers/ModalProvider";
const EditForm = ({ setEditForm }) => {
  const { register, handleSubmit } = useForm();
  const { modalItem } = useContext(ModalContext);
  const createPost = (data) => {
    API.patch(`posts/${modalItem.id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    //FALTA TRABALHAR O POP-UP SUCESS
  };
  return (
    <>
      <form onSubmit={handleSubmit(createPost)}>
        <input {...register("title")} defaultValue={modalItem.title} required />
        <input {...register("body")} defaultValue={modalItem.body} required />

        <button type="submit">Editar!</button>
      </form>
      <button
        onClick={() => {
          setEditForm(false);
        }}
      >
        Voltar
      </button>
    </>
  );
};

export default EditForm;
