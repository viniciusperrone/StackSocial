import styled from 'styled-components';

export const Conteiner = styled.div`
  min-width: 75%;
  height: 100%;
  max-height: inherit;

  position: relative;

  align-self: center;
  
  background-color: var(--color-conteiner);

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 568px){
    width: 100%;
    height: 100%;
  }
`;