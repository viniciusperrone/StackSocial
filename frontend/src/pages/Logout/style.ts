import styled from 'styled-components';

export const FirstForm = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
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
`;