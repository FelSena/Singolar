import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import API from "../API";
import { ThemeButton, ThemeH2 } from "../Styles/Globals";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ModalContext } from "../Providers/ModalProvider";

const NewPost = () => {
  const { register, handleSubmit } = useForm();
  const { handleClose } = useContext(ModalContext);
  const createPost = (data) => {
    const newData = { userId: 1, ...data };
    API.post("posts", newData)
      .then((res) => {
        res.status === 201 && toast.success("Postado com Sucesso");
        handleClose();
      })
      .catch((err) => console.error(err));
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(createPost)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <ThemeH2 color="#0096FA">Escreva um post incrível!</ThemeH2>
      <TextField label="Título" {...register("title")} required />
      <TextField label="Conteúdo" {...register("body")} required />
      <ThemeButton type="submit">Postar!</ThemeButton>
    </Box>
  );
};

export default NewPost;
