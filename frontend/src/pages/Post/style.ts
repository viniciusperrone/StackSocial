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

`; 
export const HeaderPost = styled.div`
  weight: 100%;
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