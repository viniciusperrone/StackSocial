import React from 'react';

interface ModalProps{
  message: string;
  show: boolean;
  closedModalHandler: Function;
}

const Modal: React.FC<ModalProps> = (props) => {
  return(
    <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
        <div style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
          <div>
            <p>Fundação Matias Machline</p>
            <span  onClick={() => props.closedModalHandler()}><b>X</b></span>
          </div>
          
          <div>
            <div>
              <p>{ props.message }</p>
            </div>
            <div>
              <button onClick={() => props.closedModalHandler()}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal;