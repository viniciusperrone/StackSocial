import React from 'react';

import { Wrapper, Header, Content, Body, Footer } from './style';

interface ModalProps{
  message: string;
  show: boolean;
  closedModalHandler: Function;
}

const Modal: React.FC<ModalProps> = (props) => {
  return(
    <>
      <Wrapper style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
          <Header>
            <p>Warning</p>
            <span onClick={() => props.closedModalHandler()}>X</span>
          </Header>
          <Content>
            <Body>
              <p><b>{props.message}</b></p>
            </Body>
            <Footer>
              <button onClick={() => props.closedModalHandler()}><b>close</b></button>
            </Footer>
          </Content>
      </Wrapper>
    </>
    
  )
}

export default Modal;