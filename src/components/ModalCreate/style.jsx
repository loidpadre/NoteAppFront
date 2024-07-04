import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000b9;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    .container{
        border-radius: 12px;
        width: 500px;
        display: flex;
        margin: 50px auto;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        background-color: white;
        padding: 30px;
        position: relative;
        .close{
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 25px;
            cursor: pointer;
        }
        h1{
            color: ${GlobalStyle.primaryColor};
        }
        form{
            width: 100%;
            .div{
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                input, textarea{
                    padding: 8px;
                    border-radius: 10px;
                    resize: none;
                    &:focus{
                        outline-color: #9c9c9c;
                    }
                }
            }
            .tags{
                display: flex;
                align-items: center;
                gap: 20px;
                input{
                    padding: 8px;
                    border-radius: 10px;
                    &:focus{
                        outline-color: #9c9c9c;
                    }
                }
                .icon{
                    cursor: pointer;
                }
            }
            button{
                padding: 8px;
                border: none;
                border-radius: 10px;
                width: 100%;
                margin-top: 20px;
                background-color: ${GlobalStyle.primaryColor};
                color: white;
                cursor: pointer;
                font-size: 16px;
            }
        }
    }
` 