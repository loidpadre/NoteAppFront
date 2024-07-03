
import { MenuLateral } from "../../components/MenuLateral"
import { Content } from "../../components/content"
import { Wrapper } from "./style"
export const DashBoard = () =>{
    return(
        <Wrapper>
            <div className="container">
                <MenuLateral/>
                <Content/>
            </div>
        </Wrapper>
    )
}