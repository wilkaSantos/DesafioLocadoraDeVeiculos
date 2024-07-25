import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, button, a{
    font-family: "Poppins", sans-serif;
  }

  a{
    text-decoration: none;
  }
  
  button, a{
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover{
    filter: brightness(.9);
  }

`;