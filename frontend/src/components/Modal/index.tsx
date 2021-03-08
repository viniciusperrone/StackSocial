import React from 'react';

interface ModalProps{
  message: string;
  show: boolean;
  closedModalHandler: Function;
}

const Modal: React.FC<ModalProps> = (props) => {
  return(
    <>
      <Wrapper>
        <Header>
          <p>Welcome to Our Site</p>
          <span>X</span>
        </Header>
        <Content>
          <Body>
            <h1>Modal</h1>
            <p> knmrvkinerneribpertnbtinent </p>
          </Body>
          <Footer>
            <button>Close</button>
          </Footer>
        </Content>
     </Wrapper>
    </>
    
  )
}

export default Modal;