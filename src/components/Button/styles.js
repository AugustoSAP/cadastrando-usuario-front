import styled from "styled-components";

export const Button = styled.button`
  border: none;
  ${(props) => (props.theme === "primary" ? "none" : "border: 1px solid")};
  background-color: 
  ${(props) => props.theme === "primary" ? "#ef4f45" : "transparent"};
  font-size: 16px;
  color: white;
  padding: 16px 32px;
  border-radius: 30px;
  cursor: pointer;
  width: fit-content; // se adapta ao tamanho que ele tem

  &:hover {
    opacity: 0.8;
    background-color: ${props => props.theme === "primary" ? "ef4f45": "white"};
    color: ${props => props.theme === "primary"? "ef4f45" : "black"};
  }

  &:active {
    opacity: 0.5;
  }
`;
