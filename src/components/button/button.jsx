import styled from "styled-components";

const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: blue;
  }
`;

export default Button;
