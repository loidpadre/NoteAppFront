import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wrapper } from "./Style";
import { useNavigate } from "react-router-dom";
import IMG from "../../assets/image (2).png";
import { useEffect, useState } from "react";
export const Home = () => {
    const navigate = useNavigate()
  const URL = "https://noteapp-rjhm.onrender.com";
  const [showSingup, setShowSingup] = useState(false);
  const [InvalidEmail, setInvalidEmail] = useState(false);
  const [InvalidName, setInvalidName] = useState(false);
  const [isNotEmail, setIsNotEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [emptyForm, setEmptyForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleShowSingup = (e) => {
    e.preventDefault();
    setShowSingup(!showSingup);
  };



  useEffect(() => {
    fetch(`${URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.log("Erro ao buscar usuários!", err));
  }, []);
  const handleCreateAcount = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${URL}/users`)
        .then((response) => response.json())
        .then((data) => setUsers(data.data));
      if (!users) {
        return console.log("Erro ao buscar usuario!");
      }
      if (
        email === "" ||
        name === "" ||
        password === "" ||
        passwordRepeat === ""
      ) {
        alert("Os campos não podem ficar vazios!");
        return;
      }
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        setInvalidEmail(true);
        return;
      }
      const existingName = users.find((user) => user.name === name);
      if (existingName) {
        setInvalidName(true);
        return;
      }
      if (password !== passwordRepeat) {
        setEmptyForm(true);
        return;
      }

      if (!emailRegex.test(email)) {
        setIsNotEmail(true);
        return;
      }

      const data = {
        name,
        email,
        password,
      };
      const response = await fetch(`${URL}/singup`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Usuario cadastrado com sucesso!", data);
        toast("Usuario cadastrado com sucesso!");
        setTimeout(() =>{
            navigate("/dash")
        },3000)
      }else {
        console.error("Erro ao cadastrar usuário:", response.status);
        toast("Erro ao cadastrar usuário. Por favor, tente novamente.");
    }
    } catch (error) {
      console.log("Erro ao cadastrar usuario", error);
      alert("Erro ao cadastrar usuario, por favor tente novamente!");
    }
  };



  const [emailLogin, SetEmailLogin] = useState("")
  const [passWordLogin, setPassWordLogin] = useState("")
  



  
  // logar function
  const handleSingIn = async (e) =>{
    e.preventDefault()
    try {
        
        
        if (
            emailLogin === "" || passWordLogin === "" 
          ) {
            alert("Os campos não podem ficar vazios!");
            return;
          }
          if (!emailRegex.test(emailLogin)) {
            setIsNotEmail(true);
            return;
          }
          
          const user = users.find(user => user.email === emailLogin)
        if(!user){
            setInvalidEmail(true)
            return
        }
        if(user.password !== passWordLogin){
            setInvalidPassword(true)
            return
        }
        

        toast("Login efetuado com sucesso...")
        const userId = user._id
        localStorage.setItem("id", userId)
        setTimeout(() =>{
            navigate("/dash")
        },3000)
    } catch (error) {
        console.log("erro ao fazer login", error)
        toast("Erro ao fazer login, porfavor tente denovo.")
    }
  }
  return (
    <Wrapper>
      <ToastContainer />
      <div className="container">
        <div className="logo">
          <img src={IMG} alt="" />
          <span>
            Seja bem-vindo ao nosso aplicativo de anotações, seu novo espaço
            digital para capturar ideias, organizar pensamentos e manter-se
            produtivo onde quer que esteja. Com nosso app intuitivo e fácil de
            usar, você poderá criar, editar e acessar suas notas de maneira
            simples e eficiente.
          </span>
        </div>
        <div className="login">
          {!showSingup && (
            <div className="singin">
              <div className="info">
                <h1>Fazer login.</h1>
              </div>
              <form>
                <input type="email" placeholder="Insira o seu e-mail" onChange={(e) => SetEmailLogin(e.target.value)} />
                {
                    InvalidEmail && (
                        <span className="error">Esse email ainda não foi cadastrado.</span>
                    )
                }
                {
                    isNotEmail && (
                        <span className="error">Email invalido.</span>
                    )
                }

                <input type="password" placeholder="Insira a sua senha" onChange={(e) => setPassWordLogin(e.target.value)} />
                {
                    invalidPassword && (
                        <span className="error">Senha invalida.</span>
                    )
                }
                <div className="singup">
                  <p>Não tens conta?</p>
                  <span onClick={handleShowSingup}>criar conta</span>
                </div>
                <button onClick={handleSingIn}>Entrar</button>
                <div className="socialMidea">
                  <FaLinkedin />
                  <FaInstagram />
                  <FaFacebook />
                </div>
              </form>
            </div>
          )}
          {showSingup && (
            <div className="singup">
              <h1>Criar conta.</h1>
              <form>
                <input
                  type="text"
                  placeholder="Insira seu Nome"
                  onChange={(e) => setName(e.target.value)}
                />
                {InvalidName && (
                  <span className="error">
                    Esse Nome já foi cadastrado, tente outro!
                  </span>
                )}

                <input
                  type="email"
                  placeholder="Insira o seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {InvalidEmail && (
                  <span className="error">
                    Esse email já foi cadastrado, tente outro!
                  </span>
                )}
                {isNotEmail && (
                  <span className="error">
                    Email invalido, coloque um email valido.
                  </span>
                )}
                <input
                  type="password"
                  placeholder="Insira a sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Repita a sua senha por favor"
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                />
                {emptyForm && (
                  <span className="error">
                    As senhas não são iguais, repita a mesma senha.{" "}
                  </span>
                )}
                <div className="singup">
                  <p>Já tens uma conta?</p>
                  <span onClick={handleShowSingup}>Fazer Login</span>
                </div>
                <button onClick={handleCreateAcount}>Criar conta</button>
                <div className="socialMidea">
                  <FaLinkedin />
                  <FaInstagram />
                  <FaFacebook />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
