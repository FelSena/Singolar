import { useContext } from "react";

import Post from "../../Posts";
import { ModalContext } from "../../Providers/ModalProvider";
import { Column, ThemeButton } from "../../Styles/Globals";

const Home = () => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <Column bgColor="#0096FA" gap="15px" padding="25px 0">
      <ThemeButton onClick={() => handleOpen(true)}>Criar um Post</ThemeButton>
      <Post />
    </Column>
  );
};

export default Home;
