import styled from 'styled-components';

interface StyleProps{
  width: string;
  height: string;
}
export const Conteiner = styled.div<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: var(--color-conteiner);
  border-radius: 20px;

  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 568px){
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    background-color: var(--color-conteiner);
    border-radius: 20px;
  }
`;