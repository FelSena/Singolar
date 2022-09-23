import styled from "styled-components";

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 750px;
  height: 70%;
  background-color: #f1f5e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.3);
  gap: 50px;

  @media (max-width: 767px) {
    width: 90%;
    height: 90%;
  }
`;
