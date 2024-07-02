import {FaSearch} from "react-icons/fa"
export const DashBoard = () =>{
    return(
        <div>
            <div className="container">
                <div className="menuLeft">
                    munu lateral
                </div>
                <div className="content">
                    <div className="nav">
                        <div className="search">
                            <FaSearch/>
                            <input type="text" placeholder="Pesquisar Nota" />
                        </div>
                        <div className="profile">
                            <h1>Ola, Nome do usuario</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}