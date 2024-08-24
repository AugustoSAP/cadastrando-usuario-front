import { useRef } from "react";
import api from "../../services/api";
import  {Button}  from "../../components/Button/styles";

import {
  Tilte,
  Container,
  Form,
  ContainerInput,
  Input,
  InputLabel
} from "./styles";


function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
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

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;

/*
EXPORTAR DEFAULT "Padrão" -> uma coisa só por página

Apenas EXPORTAR -> pode exportar várias
*/
