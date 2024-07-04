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
        .icon{
            cursor: pointer;
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