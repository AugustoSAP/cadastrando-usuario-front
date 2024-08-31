import { useRef } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/styles";

import {
  Tilte,
  Container,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./styles";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
  }

  return (
    <Container>
      <Form>
        <Tilte>Cadastrar Usuário</Tilte>
        <ContainerInput>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>

            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>

            <Input
              type="number"
              placeholder="Idade so usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInput>
        <div style={{ width: "100%" }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>

        <Button type="button" onClick={()=> navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
      </Form>
    </Container>
  );
}

export default Home;
