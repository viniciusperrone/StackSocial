import styled from 'styled-components';

export const HeaderConteiner = styled.header`
  width: 100%;
  height: 70px;

  background-color: #082436;
  color: #fff;

  display: flex; 

  align-items: center;
  justify-content:space-around;

  h1 {
    a {
      text-decoration: none;
      color: #fff;
      &:hover{
        color: #c6c6c6;
        transition: all 500ms;
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 568px){
    width: 100%;
    height: 10%;

    display: flex;

    h1{
      font: 400 1.25rem Sarala;
    }


  }

`;