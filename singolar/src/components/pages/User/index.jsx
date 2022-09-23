import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../API";
import { Avatar, CustomLink } from "../../PostDetails/style";
import { ModalContext } from "../../Providers/ModalProvider";
import { Column, ThemeButton, ThemeH2, ThemeSpan } from "../../Styles/Globals";
import avatar from "../../../assets/userAvatar.png";
import { AlbumBox, MainDiv, PhotoBox, PhotoColumn } from "./style";
import { ModalBg, ModalBox } from "../../MainModal/style";

const User = () => {
  const { handleClose } = useContext(ModalContext);
  const [isMounted, setIsMounted] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
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
    await API.get(`albums/${id}/photos`).then((res) => {
      setPhotos(res.data);
      setModal(true);
    });
  };

  return (
    <MainDiv>
      <Column justify="flex-start" gap="25px">
        {isMounted && (
          <>
            <Column
              w="90%"
              h="200px"
              sh="150px"
              justify="flex-start"
              gap="15px"
            >
              <Avatar img={avatar} />
              <ThemeH2>Usuário {userId}</ThemeH2>
            </Column>
            <Column w="90%" justify="flex-between" gap="20px">
              {albums.map((album) => (
                <AlbumBox key={album.id} onClick={() => getPhotos(album.id)}>
                  {album.title}
                </AlbumBox>
              ))}
            </Column>
          </>
        )}
        <CustomLink to="/">
          <ThemeButton>Home</ThemeButton>
        </CustomLink>
      </Column>
      {modal && (
        <ModalBg>
          <ModalBox>
            <PhotoColumn>
              {photos.map((photo) => (
                <>
                  <PhotoBox
                    w="500px"
                    sw="250px"
                    src={photo.url}
                    key={photo.id}
                  />
                  <ThemeSpan>{photo.title.slice(0, 30)}</ThemeSpan>
                </>
              ))}
            </PhotoColumn>
            <ThemeButton bgColor="#0096fa" onClick={() => setModal(false)}>
              Fechar
            </ThemeButton>
          </ModalBox>
        </ModalBg>
      )}
    </MainDiv>
  );
};

export default User;
