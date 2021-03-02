import styled from 'styled-components';

export const Content = styled.div`
  width: 75%;
  height: 100%;

  align-self: center;
  
  background-color: var(--color-conteiner);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font: 400 3.5rem Sarala;
    margin-top: 50px;
  }
  p{
    font: 400 2.5rem Rambla;
  }

  img{
    width: 540px;
    height: 375px
  }

`;