import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
export const Wrapper = styled.nav`
    width: 300px;
    height: 100vh;
    background-color: ${GlobalStyle.primaryColor} ;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content{
        margin-top: 40px;
        .logo{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 100px;
                border-radius: 50%;
                height: 100px;
                object-fit: cover;
            }
        }
        .setting{
            ul{
                li{
                    display: flex;
                    gap: 20px;
                    list-style: none;
                    margin-top: 35px;
                    font-size: 16px;
                    font-weight: 400;
                    transition: 0.5s ease; 
                    align-items: center;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    &:hover{
                        background-color: white;
                        color: ${GlobalStyle.primaryColor};
                    }
                }
            }
        }
        /// vai entrar os estylos das definiçoes
    }
`