import styled from 'styled-components';

export const Content = styled.div`
  width: 75%;
  height: 600px;

  align-self: center;
  
  background-color: var(--color-conteiner);

  display: flex;
  flex-direction: column;

  align-items: center;

  button{
    background-color: #082436;
    color: #fff;
    margin-top: 30px;
  }
  
  @media only screen and (min-width: 320px) and (max-width: 568px){
    width: 100%;
    height: 87.5%;

    header{
      h1{
        font: 400 2.5rem Sarala;
      }
    }

    input{
      width: 150px;
      height: 30px;
      border-radius: 15px; 
      font: 400 1.5rem Rambla;
    }
    textarea{
      width: 200px;
      height: 62.5px;
      border-radius: 10px;
      padding: 2px;

      font: 400 1.5rem Rambla;
    }

    button{
      width: 150px;
      height: 35px;
      border-radius: 35px;
    }

    h1{
      font: 400 2rem Sarala;
    }
  }

`; 
export const HeaderPost = styled.header`
  width: 100%;
  height: 100px;

  color: #0D3C59;

  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font: 400 4rem Sarala;
  }
`;

export const TextField = styled.textarea`
  border-radius: 20px;
  border: none;
  height: 125px;
  width: 400px;
  padding: 10px;

  font: 400 2rem Rambla;

  align-self: center;
`; 