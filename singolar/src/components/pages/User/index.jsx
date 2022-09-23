import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../API";
import { Avatar } from "../../PostDetails/style";
import { ModalContext } from "../../Providers/ModalProvider";
import { Column, ThemeH2 } from "../../Styles/Globals";
import avatar from "../../../assets/userAvatar.png";

const User = () => {
  const { handleClose } = useContext(ModalContext);
  const [isMounted, setIsMounted] = useState(false);
  const [albums, setAlbums] = useState([]);
  const location = useLocation();
  const { userId } = location.state;
  const [modal, setModal] = useState(false);

  useEffect(() => {
    handleClose();
    API.get(`users/${userId}/albums`)
      .then((res) => {
        setAlbums(res.data);
        setIsMounted(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const getPhotos = async (id) => {
    await API.get(`albums/${id}/photos`).then((res) => console.log(res.data));
  };

  return (
    <Column bgColor="#0096fa" h="100vh">
      {isMounted && (
        <Column w="90%" h="90%" bgColor="">
          <Avatar img={avatar} />
          <ThemeH2>Usuário {userId}</ThemeH2>

          {albums.map((album) => (
            <span key={album.id} onClick={() => getPhotos(album.id)}>
              {album.title}
            </span>
          ))}
        </Column>
      )}
    </Column>
  );
};

export default User;
