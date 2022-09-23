import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import API from "../API";
import { ModalContext } from "../Providers/ModalProvider";
import { Column, ThemeButton } from "../Styles/Globals";
import { toast } from "react-toastify";

const EditForm = ({ setEditForm }) => {
  const { register, handleSubmit } = useForm();
  const { modalItem, handleClose } = useContext(ModalContext);
  const editPost = (data) => {
    API.patch(`posts/${modalItem.id}`, data)
      .then((res) => {
        res.status === 200 && toast.success("Post Editado!");
        handleClose();
      })
      .catch((err) => console.error(err));
  };
  return (
    <Column gap="20px">
      <Box
        component="form"
        onSubmit={handleSubmit(editPost)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <TextField
          {...register("title")}
          defaultValue={modalItem.title}
          label="Título"
          required
        />
        <TextField
          {...register("body")}
          label="Conteúdo"
          defaultValue={modalItem.body}
          required
        />

        <ThemeButton type="submit">Editar!</ThemeButton>
      </Box>
      <ThemeButton
        onClick={() => {
          setEditForm(false);
        }}
      >
        Voltar
      </ThemeButton>
    </Column>
  );
};

export default EditForm;
