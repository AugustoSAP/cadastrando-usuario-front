import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-size: 2.8rem;  /* Use rem para escalabilidade */
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;  /* Adiciona um espaçamento inferior */
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsivo */
  gap: 20px;
  margin-bottom:50px;

  @media (max-width: 880px){
    grid-template-columns: 1fr;
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 20px;  /* Diminui o padding para um melhor alinhamento */

  &:hover{
    opacity: 0.8;
    transform: scale(1.1); /* Leve zoom no hover para melhorar a UX */
  }

  &:active{
    opacity: 0.5;
    transform: scale(0.95); /* Reduz ligeiramente o tamanho ao clicar */
  }
`;

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  box-sizing: border-box; 
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 100%;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;  
    flex: 1; /* Garante que o texto ocupe todo o espaço disponível */
  }

  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    margin: 0; 
    line-height: 1.2; 
  }

  p {
    color: #fff;
    font-size: 0.875rem;
    margin: 0; 
    line-height: 1.2; 
  }
`;

export const AvatarUser = styled.img`
  height: 80px;
  width: 80px; 
  border-radius: 50%; 
  object-fit: cover; /* Garante que a imagem se ajuste bem no container */
  flex-shrink: 0; /* Evita que o avatar seja redimensionado */
`;
