import styled from "styled-components"
import { GlobalStyle } from "../../GlobalStyle"
export const Wrapper = styled.div`
    width: 300px;
    border-radius: 12px;
    background-color: ${GlobalStyle.secondColor};
    padding: 20px;
    cursor: pointer;
    .topo{
        display: flex;
        justify-content: space-between;
        align-items:center;
        position: relative;
        .icon{
            cursor: pointer;
        }
        .modal{
            display: flex;
            flex-direction: column;
            gap: 10px;
            span{
                color: ${GlobalStyle.primaryColor};
            }
            background-color: ${GlobalStyle.background};
            border-radius: 10px;
            position: absolute;
            padding: 10px;
            right: 4px;
            top: 30px;
            .editar{
                display: flex;
                gap: 10px;
                align-items: center;
            }
            .deletar{
                display: flex;
                gap: 10px;
                align-items: center;
            }
        }
        
    }
    span{
        color: gray;

    }
    
    .text{
        h4{
          color: ${GlobalStyle.primaryColor};
          font-weight: 400;
          font-size: 16px;
          margin-top: 10px;
        }
        span{
            color: #222121;
        }
    }
`