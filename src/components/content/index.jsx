import { FaSearch } from "react-icons/fa";
import { Wrapper } from "./style";
import { useEffect, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { NoteCard } from "../notesCard";
import { ModalCreate } from "../ModalCreate/Index";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
export const Content = () => {
  const [userInfo, setUserInfo] = useState({});
  const [openModalCreate, setOpenModalCreate] = useState(false)
  const [openExit, setOpenExit] = useState(false)
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


  // open exit
  const handleOpenExit = () =>{
      setOpenExit(!openExit)
  }
  const handleLogout = () =>{
      window.location.replace("/")
  }

  //feature pesquisar 
  const [valueSearch, setValueSearch] = useState("")
  const [filterNote, setFilterNote] = useState([])
  useEffect(() =>{
    const filtrNoted = userInfo.notes?.filter(note => note.title.toLowerCase().includes(valueSearch.toLowerCase()))
    setFilterNote(filtrNoted)
    
    
  },[userInfo.notes, valueSearch])

  //filtrar pela tag 
  const handleTag = (tag)=>{
    const noteFilterByTag = userInfo.notes?.filter(note => note.tag.toLowerCase().includes(tag.toLowerCase()))
    setFilterNote(noteFilterByTag)
  }
  const handleAll = () =>{
    setFilterNote(userInfo.notes)
  }
  return (
    <Wrapper>
      <div className="top">
        <div className="search">
          <FaSearch color="gray" />
          <input type="text" placeholder="Pesquisar Nota" onChange={(e) => setValueSearch(e.target.value)} value={valueSearch} />
        </div>
        <div className="profile">
          <div className="box" onClick={handleOpenExit}>
            <span >{initials}</span>
            
          </div>
          <div className={openExit ? "exitArea show":  `exitArea`} onClick={handleLogout}>
              <CgLogOut />
              <span>Sair da sua conta</span>
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
           
              <span className="ative" onClick={handleAll}>All</span>
            
             {Array.from(tags).map(tag => (
                <span key={tag} onClick={() => handleTag(tag)}>{tag}</span>
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
        {filterNote && (
  <>
    {filterNote.length === 0 && (
      <span>Você não tem nota!</span>
    )}
    {filterNote.map((note) => (
      <NoteCard key={note._id} note={note} userInfo={userInfo} setUserInfo={setUserInfo} handleOpenModal={handleOpenModal} />
    ))}
  </>
)}
        </div>
      </div>
    </Wrapper>
  );
};
