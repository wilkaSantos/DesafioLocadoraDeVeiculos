import styled from "styled-components";
import theme from '../../styles/theme';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  > main{
    position: relative;
    padding-right: 5px;
    width: 60%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  }
`;

export const Form = styled.section`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1{
    text-align: center;
    font-size: 34px;
    margin-bottom: 17px;
    color: ${theme.colors.blue_700};
  }

  > form{
    display: flex;
    flex-direction: column;
    padding: 10px 50px;
  }

    > div{
      display: flex;
      flex-direction: column;
    }

      > form > div > label{
        font-size: 14px;
        color: ${theme.colors.blue_700};
      }

      > form > div:nth-child(1){
        margin-bottom: 13px;
      }

    > form > a{
      font-size: 12px;
      text-align: end;
      color: ${theme.colors.blue_700};
    }

    > form > button{
      margin-top: 20px;
    }

    > form > a:nth-child(5){
      font-size: 14px;
      text-align: center;
      margin-top: 25px;
    }
`;

export const Banner = styled.section`

  width: 60%;
  height: 100%;

  display: flex;
  align-items: end;
  

  > img{
    width: 100%;
  }
`;
