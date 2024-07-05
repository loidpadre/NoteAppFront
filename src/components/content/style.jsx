import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
export const Wrapper = styled.nav`
  width: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    background-color: ${GlobalStyle.background};
    padding: 20px;
    box-shadow: 1px 2px 3px gray;
    .search {
      background-color: white;
      padding: 8px;
      border-radius: 10px;
      width: 20%;
      display: flex;
      align-items: center;
      gap: 20px;
      input {
        outline: none;
        border: none;
        width: 100%;
      }
    }
    .profile {
      display: flex;
      gap: 10px;
      align-items: center;
      .box {
        height: 40px;
        width: 40px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        color: ${GlobalStyle.primaryColor};
        span {
          font-weight: 600;
        }
      }
      h1 {
        font-size: 16px;
        span {
          font-weight: 500;
        }
      }
      .exitArea {
        display: flex;
        gap: 10px;
        align-items: center;
        position: absolute;
        top: 20px;
        right: 0px;
        z-index: -1;
        opacity: 0;
        background-color: white;
        padding: 10px;
        transition: 0.5s ;
        border-radius: 10px;
        cursor: pointer;
        span {
          color: ${GlobalStyle.primaryColor};
          &:hover {
            color: ${GlobalStyle.linkColor};
          }
        }
      }

      .show{
        right: 200px;
        opacity: 1;
        z-index: 1;
      }
    }
  }

  .content {
    width: 100%;
    padding: 20px;
    margin: 40px auto;
    h1 {
      span {
        font-weight: 500;
        color: ${GlobalStyle.primaryColor};
      }
    }
    .tagAndCreat {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tags {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        span {
          background-color: ${GlobalStyle.primaryColor};
          padding: 10px;
          border-radius: 10px;
          color: white;
          font-size: 13px;
          cursor: pointer;
        }
        .ative {
          background-color: white;
          border: 1px solid ${GlobalStyle.primaryColor};
          color: ${GlobalStyle.primaryColor};
        }
      }
      .create {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        span {
          font-weight: 600;
        }
        .icon {
          font-size: 26px;
          color: ${GlobalStyle.primaryColor};
        }
      }
    }

    .notes {
      overflow-y: auto;
      margin-top: 40px;
      border-radius: 12px;
      width: 100%;
      background-color: ${GlobalStyle.background};
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      gap: 10px;
    }
  }
`;
