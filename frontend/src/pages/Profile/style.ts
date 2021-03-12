import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 75%;
  height: 100%;

  align-self: center;
  
  background-color: var(--color-conteiner);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 568px){
    width: 100%;
    height: 100%;
  } 
`;

export const Content = styled.div`
  width: 70%;
  height: 550px;

  background-color: #14608F;

  border-radius: 30px;

  @media only screen and (min-width: 320px) and (max-width: 568px){
    width: 90%;
    height: 80%;

    header{

      justify-content: center;
      align-items: center;

      img{
        width: 130px;
        height: 75px;
      }

      div > h1{
        font: 400 2.25rem Sarala;
      }

      div > p{
        font: 400 1.5rem Rambla;
      }
    }

  }

`;

export const HeaderContent = styled.header`
  width: 100%;
  height: 30%;

  display: flex;

  justify-items: center;

  img{
    width: 260px;
    height: 150px;
  }

  div{
    height: 100%;
    width: 100%;

    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 10px;

  }
`;

export const BodyContent = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  color: #fff;

  hr{
    width: 100%;
    background-color: #fff;
  }

  button{
    margin-top: 20px;
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 320px) and (max-width: 568px){
    
    hr{
      margin-bottom: 10px;
    }
    h1{
      font: 400 2.25rem Sarala;
    }
    
    input{
      width: 70%;
      height: 12.5%;
    }

    button{
      width: 70%;
    }
  }
`;