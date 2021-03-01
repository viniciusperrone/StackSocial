import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 60%;

    --color-background: #6699A3;
    --color-conteiner: #C4DEFD;
    --color-button: #00E092;
    
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
   height: 100vh;
   width: 100vw;
  }

  h1{
    font: 400 3rem Sarala;
  }

  label{
    font: 400 2.5rem Rambla;
  }

  button{
    font: 400 2rem Rambla;
    border: none;

  }

  p{
    font: 400 2rem Rambla;
  }

  input{
    padding-left: 10px;
    font: 400 2rem Rambla;  
  }



`;