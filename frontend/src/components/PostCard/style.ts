import styled from 'styled-components';

export const Card = styled.div`
  width: 600px;
  height: 90px;

  background-color: #f1f1f1;

  border-radius: 20px;

  display: flex;

  margin-top: 30px;

  @media only screen and (min-width: 320px) and (max-width: 568px) {
    width: 95%;
    max-width: 256px;
    height: 60px;

    div > img {
      width: 40px;
      height: 40px; 
    }

    div > header {
      width: 100%;
      height: 30%;

      display: flex;

      align-items: center;

      h1{
        font: 400 1.25rem Sarala;
        color: #3BA2E3;
      }

      p{
        font: 400 1.25rem Rambla;
        margin-left: 5px;
        color: #707070;
      }
    }

    div > div {
      h1{
        font: 400 1.25rem Sarala;
        color: #3BA2E3;
        margin-left: 10px;
      }

      p{
        font: 400 1rem Rambla;
        color: #707070;
        margin-left: 10px;
      }
    }
  }
`;

export const Profile = styled.div`
  height: 100%;
  width: 80px;

  display: flex;

  justify-content: center;

  align-items: center;

  img{
    width: 60px;
    height: 60px;
  }
`;

export const Content = styled.div`
  width: 520px;
  height: 100%;

`;

export const Header = styled.header`
  width: 100%;
  height: 30%;

  display: flex;

  align-items: center;

  padding-left: 20px;

  h1{
    font: 400 1.5rem Sarala;
    color: #3BA2E3;
  }

  p{
    font: 400 1.5rem Rambla;
    margin-left: 5px;
    color: #707070;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;

  justify-content: center;

  h1{
    font: 400 2rem Sarala;
    color: #3BA2E3;
    margin-left: 10px;
  }

  p{
    font: 400 1.75rem Rambla;
    color: #707070;
    margin-left: 10px;
  }
`;