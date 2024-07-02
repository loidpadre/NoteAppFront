import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 180px auto;
    gap: 50px;
    .logo {
      display: flex;
      flex-direction: column;
      span {
        width: 500px;
      }
      img {
        width: 500px;
      }
    }
    .login {
      display: flex;
      .singin {
        .error {
          color: red;
          animation: errorAnime 0.5s ease-in-out alternate;
        }
        @keyframes errorAnime {
          0% {
            transform: translateX(-5px);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(-20px);
          }
          75% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(5px);
          }
        }
        h1 {
          text-align: center;
          font-weight: 300;
        }
        form {
          background-color: ${GlobalStyle.primaryColor};
          padding: 20px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 300px;
          .singup {
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: ${GlobalStyle.secondColor};
            p {
              color: ${GlobalStyle.background};
            }
            span {
              font-weight: 300;
              cursor: pointer;
              transition: 0.5s ease;
              text-decoration: underline;
              &:hover {
                color: ${GlobalStyle.linkColor};
              }
            }
          }
          input,
          button {
            padding: 10px;
            border-radius: 10px;
            border: none;
          }
          input {
            &:focus {
              outline: none;
            }
          }
          button {
            cursor: pointer;
            transition: 0.5s ease;
            &:hover {
              color: ${GlobalStyle.secondColor};
              background-color: ${GlobalStyle.linkColor};
            }
          }
          .socialMidea {
            text-align: center;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            color: ${GlobalStyle.secondColor};
            font-size: 20px;
          }
        }
      }
    }
    .singup {
      h1 {
        text-align: center;
        font-weight: 300;
      }
      form {
        background-color: ${GlobalStyle.primaryColor};
        padding: 20px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 300px;
        .error {
          color: red;
          animation: errorAnime 0.5s ease-in-out alternate;
        }
        @keyframes errorAnime {
          0% {
            transform: translateX(-5px);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(-20px);
          }
          75% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(5px);
          }
        }
        .singup {
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: ${GlobalStyle.secondColor};
          p {
            color: ${GlobalStyle.background};
          }
          span {
            font-weight: 300;
            cursor: pointer;
            transition: 0.5s ease;
            text-decoration: underline;
            &:hover {
              color: ${GlobalStyle.linkColor};
            }
          }
        }
      }
      input,
      button {
        padding: 10px;
        border-radius: 10px;
        border: none;
      }
      input {
        &:focus {
          outline: none;
        }
      }
      button {
        cursor: pointer;
        transition: 0.5s ease;
        &:hover {
          color: ${GlobalStyle.secondColor};
          background-color: ${GlobalStyle.linkColor};
        }
      }
      .socialMidea {
        text-align: center;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        color: ${GlobalStyle.secondColor};
        font-size: 20px;
      }
    }
  }
`;
