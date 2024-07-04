import { FaSearch } from "react-icons/fa";
import { Wrapper } from "./style";
import { useEffect, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { NoteCard } from "../notesCard";
import { ModalCreate } from "../ModalCreate/Index";
export const Content = () => {
  const [userInfo, setUserInfo] = useState({});
  const [openModalCreate, setOpenModalCreate] = useState(false)
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
  const initials = userInfo.name
    ? userInfo.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("")
    : "";

    const handleOpenModal = () =>{
        setOpenModalCreate(!openModalCreate)
    }


    useEffect(() => {
      const uniqueTags = new Set();
      userInfo.notes?.forEach(note => {
          uniqueTags.add(note.tag);
      });
      setTags(uniqueTags);
  }, [userInfo.notes]);
  const [tags, setTags] = useState(new Set());
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
          Bem vindo de Volta, <span>{userInfo.name}</span>
        </h1>
        <span>Gerencia as suas notas, com facilidade, e tranquilidade</span>
        <div className="tagAndCreat">
          <div className="tags">
           
              <span className="ative">All</span>
            
             {Array.from(tags).map(tag => (
                <span key={tag}>{tag}</span>
            ))}
          </div>
         {
          openModalCreate && (
            <ModalCreate handleOpenModal={handleOpenModal}/>
          )
         }
          <div className="create" onClick={handleOpenModal}>
            <RiAddCircleFill className="icon" />
            <span>Criar nova nota</span>
          </div>
        </div>
        <div className="notes">
          {userInfo.notes?.length === 0 && (
            <span>Voce ainda não criou nenhuma nota!</span>
          )}
          {userInfo.notes?.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
