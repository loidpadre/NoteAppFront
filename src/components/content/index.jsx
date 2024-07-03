import { FaSearch } from "react-icons/fa";
import { Wrapper } from "./style";
import { useEffect, useState } from "react";
export const Content = () => {
  const [userInfo, setUserInfo] = useState({});
  const URL = "https://noteapp-rjhm.onrender.com";
  useEffect(() => {
    const id = localStorage.getItem("id");
    fetch(`${URL}/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((err) =>
        console.log("Erro ao buscar informações de usuario", err)
      );
  }, []);
  const initials = userInfo.name ? userInfo.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('') : '';
  return (
    <Wrapper>
      <div className="top">
        <div className="search">
          <FaSearch color="gray" />
          <input type="text" placeholder="Pesquisar Nota" />
        </div>
        <div className="profile">
          <div className="box">
            <span>{initials}</span>
          </div>
          <h1>
            Olá, <span>{userInfo.name}</span>
          </h1>
        </div>
      </div>
      <div className="content">
        <h1>
          Bem vindo de novo, <span>{userInfo.name}</span>
        </h1>
        <span>Gerencia as suas notas, com facilidade, e tranquilidade</span>
        <div className="tags">
          <span>Programação</span>
          <span className="ative">Fitness</span>
          <span>Reunião</span>
        </div>
      </div>
    </Wrapper>
  );
};
