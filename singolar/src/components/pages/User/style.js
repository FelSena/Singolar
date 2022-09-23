import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #0096fa;
  box-sizing: border-box;
  padding: 15px 0;
`;
export const AlbumBox = styled.div`
  width: 100%;
  height: 42px;
  cursor: pointer;
  background-color: #f1f5e9;
  color: #d69c27;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.3);
  @media (max-width: 767px) {
    height: 62px;
    margin-bottom: 5px;
  }
`;

export const PhotoBox = styled.img`
  width: ${(props) => props.w};
  height: auto;
  @media (max-width: 767px) {
    width: ${(props) => props.sw};
  }
`;

export const PhotoColumn = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  overflow-y: scroll;
`;
