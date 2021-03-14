import styled from 'styled-components';

interface BackgroundConteinerProps{
  justifyContent: string;
  alignItems: string;
}
export const BackgroundConteiner = styled.div<BackgroundConteinerProps>`
  height: 100%;
  width: 100vw;

  max-height: inherit;
  background-color: var(--color-background);

  

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems}; 
`; 