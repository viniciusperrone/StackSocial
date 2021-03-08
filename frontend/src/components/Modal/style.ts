import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  width: 500px;
  margin: 4rem auto;
`;

export const Header = styled.header`
  background: #9871F5;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
  p{
    font: 400 2rem Rambla;
    color: #fff;
    margin-left: 70px;
  }

  span{
    font: 400 2rem Rambla;
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
    background-color: var(--color-secundary-button);
  
    justify-content: center;
    text-align: center;
    font: 400 2.25rem Skranji;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;