import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 75%;
  height: 600px;

  align-self: center;
  
  background-color: var(--color-conteiner);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div`
  width: 70%;
  height: 550px;

  background-color: #14608F;

  border-radius: 30px;

`;

export const HeaderContent = styled.div`
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
`;