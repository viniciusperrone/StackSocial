import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  width: 500px;
  margin: 4rem auto;
  position: absolute;
  z-index: 10;
  border: none;
  border-radius: 15px;

  @media screen and (min-width: 320px) and (max-width: 568px){
  
  width: 70%;
  
  }

`;

export const Header = styled.header`
  background: #9871F5;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
  border: none;
  p{
    font: 400 2.25rem Rambla;
    color: #fff;
    margin-left: 70px;
  }

  span{
    font: 400 2.25rem Rambla;
    color: #fff;
    cursor: pointer;
    &:hover{
      color: #D54444;
    }
  }

`;

export const Content = styled.div`
  margin-bottom: 1.5rem 1rem;
`;
export const Body = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font: 400 2.25rem Skranji;
    color: #333;
    padding: 1rem;
    margin: 1rem 0 2rem 0;
  }

  @media screen and (min-width: 320px) and (max-width: 568px){
    p{
      font: 400 2rem Skranji;
    }
  }

`;
export const Footer = styled.footer`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  button{
    border-radius: 15px;
    margin-left: -10px;
    height: 6vh;
    width: 14vw;
    background-color: #D54444;
    color: #fff;
  
    justify-content: center;
    text-align: center;
    font: 400 2.25rem Skranji;
    border: none;
    outline: none;
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 568px){
    button{
      width: 80%;
    }
  }
`;