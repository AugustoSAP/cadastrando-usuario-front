import { useRef } from "react";
import api from "../../services/api";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/styles";
=======
import  {Button}  from "../../components/Button/styles";
>>>>>>> 76d22f992e40bfce33374361f92747276953da81

import {
  Tilte,
  Container,
  Form,
  ContainerInput,
  Input,
<<<<<<< HEAD
  InputLabel,
} from "./styles";

=======
  InputLabel
} from "./styles";


>>>>>>> 76d22f992e40bfce33374361f92747276953da81
function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

<<<<<<< HEAD
  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
=======
  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    });

>>>>>>> 76d22f992e40bfce33374361f92747276953da81
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

<<<<<<< HEAD
        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>

        <Button type="button" onClick={()=> navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
=======
        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
>>>>>>> 76d22f992e40bfce33374361f92747276953da81
      </Form>
    </Container>
  );
}

export default Home;
<<<<<<< HEAD
=======

/*
EXPORTAR DEFAULT "Padrão" -> uma coisa só por página

Apenas EXPORTAR -> pode exportar várias
*/
>>>>>>> 76d22f992e40bfce33374361f92747276953da81
