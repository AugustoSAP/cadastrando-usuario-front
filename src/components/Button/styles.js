import styled from "styled-components"


export const Button = styled.button`
border: none;
background-color: #ef4f45 ;
font-size: 16px;
color: white;
padding: 16px 32px;
border-radius: 30px;
cursor: pointer;
width: fit-content;  // se adapta ao tamanho que ele tem

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.8;
}

`;