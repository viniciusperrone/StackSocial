import styled from 'styled-components';

export const FormFirst = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label{
    margin: 10px;
  }

  button{
    margin-top: 40px;
  }
  p{
    margin-top: 15px;
  }

  @media screen and (min-width: 320px) and (max-width: 568px){
    width: 100%;
    height: 100%;

    position: absolute;

    h1{
      font: 400 2.5rem Sarala;
    }

    label{
      margin: 10px;
      font: 400 2rem Rambla;
    }

    button{
      margin-top: 40px;
      font: 400 1.5rem Rambla;
      width: 200px;
    }
    p{
      font: 400 1.5rem Rambla;
      margin-top: 15px;
    }
    input{
      width: 200px;
    }
  }
`;

export const FormSecond = styled.form`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 568px){
    width: 0;
    height: 0;
    
  }
`;