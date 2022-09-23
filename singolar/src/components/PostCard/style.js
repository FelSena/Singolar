import styled from "styled-components";

export const PostBox = styled.div`
  width: 80%;
  height: 150px;
  background-color: #f1f5e9;
  border-radius: 8px;
  box-shadow: 3px 4px 3px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  box-sizing: border-box;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 90%;
    height: 300px;
  }
`;

export const ViewMore = styled.button`
  width: 100px;
  height: 36px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0096fa;
  border: none;
`;
