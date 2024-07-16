import { useState } from "react";
import { GlobalStyle } from "../../GlobalStyle";
import { Wrapper } from "./style";
import { IoMdCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const ModalCreate = ({handleOpenModal}) => {
    const navigate = useNavigate()
    const userId = localStorage.getItem("id")
    const URL = "https://noteapp-rjhm.onrender.com";
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("")
    const [progressBar, setProgressBar] = useState(false)
    const newNote = {
        title,
        content,
        tag: tag.toLowerCase()
    }
    const handleCreateNote = async (e) =>{
        e.preventDefault()
        try {
            if(title === "" || content === ""){
                return alert("Preencha os campos por favor")
            }

            const response  = await fetch(`${URL}/users/${userId}/notes`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newNote)
            })
            if(!response.ok){
               return alert("Erro ao criar Nota, tente Novamente!")
            }
            setProgressBar(true)
            toast("Nota criada com sucesso!")
            

                window.location.reload()


        } catch (error) {
            console.log("Erro ao criar nota", error)
        }
    }
  return (
    <Wrapper>
        <ToastContainer/>
      <div className="container">
      <IoMdCloseCircle className="close" onClick={handleOpenModal} />
        <h1>Criar Nova Nota</h1>
        <form>
          <div  className="div">
            <span>Titulo</span>
            <input type="text" placeholder="Titulo da nota" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="div">
            <span>Conteúdo</span>
            <textarea rows={10} cols={20}  onChange={(e) => setContent(e.target.value)}>
              Digite o conteúdo da Anotação
            </textarea>
          </div>
          <div className="tags">
            <input type="text" placeholder="Adicionar tag"  onChange={(e) => setTag(e.target.value)}/>
          </div>
          <button onClick={handleCreateNote}  className="btn">
            <div className={progressBar ? "box show": "box"}></div>
            <span className={progressBar ? "hiddem": ""}>Criar Nota</span>
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
