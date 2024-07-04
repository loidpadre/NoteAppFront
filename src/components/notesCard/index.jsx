import { useState } from "react";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { Wrapper } from "./style";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const NoteCard = ({ note }) => {
  const date = new Date(note.createdAt);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("pt-BR", { month: "long" });
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };

  const URL = "https://noteapp-rjhm.onrender.com";
  const userId = localStorage.getItem("id")
  const handleDeleteNote = async (id ) =>{
      try {
        const response = await fetch(`${URL}/users/${userId}/${id}`, {
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          }
        })
        if(!response.ok){
          return alert("Nota não encontrada, tente novamente")
        }
        toast("Nota deletada com sucesso")
        window.location.reload()

      } catch (error) {
        console.log(error)
      }
  }
  return (
    <Wrapper>
      <ToastContainer/>
      <div className="topo">
      {
        openModalDelete && (
          <div className="modal">
        <div className="deletar" onClick={() => handleDeleteNote(note._id)}>
          <span>Deletar</span>
          <MdDelete />
        </div>
        <div className="editar">
          <span>Editar</span>
          <MdEditDocument />
        </div>
      </div>
        )
      }
        <span>
          {day}, {month} {year}
        </span>
        <HiOutlineDotsVertical
          className="icon"
          onClick={handleOpenModalDelete}
        />
      </div>{" "}
      <div className="text">
        <h1 className="title">{note.title}</h1>
        <span>{note.content}</span>
        <h4>#{note.tag}</h4>
      </div>
    </Wrapper>
  );
};
