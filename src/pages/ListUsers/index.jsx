<<<<<<< HEAD
import { Button } from "../../components/Button/styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { ContainerUsers, Title, CardUsers, AvatarUser, TrashIcon, Container } from "./styles";
import Trash from '../../assets/trash.svg';
import { useNavigate } from "react-router-dom";

function ListUsers() {
  const [users, setUsers] = useState([]);

  const navigatee = useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/usuarios");
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
     await api.delete(`usuarios/${id}`)

     const updateUsers =  users.filter( user => user.id !==id)

     setUsers(updateUsers)
  }

 

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      <ContainerUsers>
        {users.length > 0 ? (
          users.map((user) => (
            <CardUsers key={user.id}>
              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} alt={`Avatar de ${user.name}`} />
              <div>
                <h3>{user.name}</h3>
                <p>{user.age} anos</p>
                <p>{user.email}</p>
              </div>
              <TrashIcon src={Trash} alt="Ícone de lixeira" onClick={()=> deleteUsers(user.id)} />
            </CardUsers>
          ))
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </ContainerUsers>

      <Button type="button" onClick={()=> navigatee('/')}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
=======
import { Button } from "../../components/Button/styles"


function  ListUsers () {
    
    return(
        <div>
            <h1>Listagem de Usuários</h1>
            <Button>clicar</Button>
        </div>
    )
}


export default ListUsers
>>>>>>> 76d22f992e40bfce33374361f92747276953da81
