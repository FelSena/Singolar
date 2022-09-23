import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailsBox = styled.div`
  width: 90%;
  height: 80%;
  padding: 20px 5px;
  box-sizing: border-box;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #0096fa;
  background-color: #f1f5e9;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

export const CommentBox = styled.div`
  width: 80%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.3);
  
`;
