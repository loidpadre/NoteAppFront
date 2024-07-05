import { useState } from "react";
import { Wrapper } from "./style";
import { IoMdCloseCircle } from "react-icons/io";
export const ModalEdit = ({openModalEdit, note}) => {
    const [close, setClose] = useState(false)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)
    const [tag, setTag] = useState(note.tag)
    const handleClose = () =>{
        setClose(!close)
        console.log(close)
    }
    const URL = "https://noteapp-rjhm.onrender.com";
  const userId = localStorage.getItem("id");
const handleEdit = async (e) => {
  e.preventDefault();

  try {
    if (!userId) {
      throw new Error("ID de usuário não encontrado no localStorage");
    }
    const newNote = {
      title,
      content,
      tag
    };

    const response = await fetch(`${URL}/users/${userId}/${note._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    });

    if (!response.ok) {
      throw new Error(`Erro ao editar nota: ${response.status} - ${response.statusText}`);
    }

    console.log("Nota editada com sucesso");
    window.location.reload("/"); // Recarrega a página após edição bem-sucedida

  } catch (error) {
    console.error("Erro ao editar nota:", error.message);
    // Exibir mensagem de erro ao usuário ou logar o erro para depuração
  }
};

  return (

                <Wrapper>
      <div className="container">
      <IoMdCloseCircle className="close" onClick={openModalEdit}/>
        <h1>Editar nota!</h1>
        <form>
          <div className="div">
            <span>Titulo</span>
            <input type="text" placeholder="Titulo da nota" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="div">
            <span>Conteúdo</span>
            <textarea rows={10} cols={20} value={content} onChange={(e) => setContent(e.target.value)}>
              Digite o conteúdo da Anotação
            </textarea>
          </div>
          <div className="tags">
            <input type="text" placeholder="Adicionar tag"  value={tag} onChange={(e) => setTag(e.target.value)}/>
          </div>
          <button onClick={handleEdit}>Atualizar</button>
        </form>
      </div>
    </Wrapper>

  );
};
