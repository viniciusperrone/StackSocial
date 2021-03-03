import styled from 'styled-components';

export const FirstForm = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 568px){
    img{
      width: 0;
      height: 0;
    }
  }
`;

export const SecondForm = styled.div`
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

  @media only screen and (min-width: 320px) and (max-width: 568px){
    height: 100%;
    width: 100%;

    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;