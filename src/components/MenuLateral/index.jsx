import { Wrapper } from "./style"
import IMG from "../../assets/image (2).png"
import { BiSupport } from "react-icons/bi";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
export const MenuLateral = () =>{
    return(
        <Wrapper>
            <div className="content">
            <div className="logo">
                <h1>NOTES</h1>
            </div>
            
                <div className="setting">
                <ul>
                    <li>
                        <GrOverview/>
                        Overview
                        </li>
                    <li>
                        <FaTasks/>
                        Task
                        </li>
                    <li>
                    <IoDocumentAttachSharp />
                        Documentação
                        </li>
                    <li>
                    <GrNotes />
                        Notas
                        </li>
                    <li>
                    <BiSupport />
                        Support
                        </li>
                </ul>
                </div>
                <div className="redes">

                </div>
            </div>
        </Wrapper>
    )
}