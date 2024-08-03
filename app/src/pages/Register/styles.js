import styled from "styled-components";
import theme from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;

    > main {
      width: 60%;
      height: 70%;

      display: flex;
      align-items: center;
      justify-content: space-around;
      
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
      background-color: ${theme.colors.white};

      > form {
        padding: 7px;

        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2px;

        > h2{
          text-align: center;
          color: ${theme.colors.blue_700};
        }

        > section{
          display: flex;
          gap: 10px;
        }

        > div > label, section > div > label {
          font-size: 14px;
          color: ${theme.colors.blue_700};
        }

        > div > input, section > div > input{
          padding: 7px;
        }

        > button{
          margin-top: 18px;
        }
      }
    }
`;

export const Image = styled.div`
  width: 40%;

  > img{
    width: 337px;
    opacity: .5;
  }
`;