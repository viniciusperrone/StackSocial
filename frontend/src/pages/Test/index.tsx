import React, { useState } from 'react';

import Modal from '../../components/Modal';
import Background from '../../components/Background';

const Test: React.FC = () => {

  const [show, setShow] = useState(false);

  function closedModalHandler (){
    return setShow(false);
  }

  return(
    <>
      <div>
        { show ? <div style={{
          background: `rgba(63,61,61,0.8)`,
          height: `100%`,
          width: `100%`,
          position: `absolute`,
          zIndex: 9,
          transition: `all 1.3s`,
        }}></div> : null}
      </div>
      <Background justifyContent="center" alignItems="center">

      <Modal message="Failed in compare it's not ok!" show={show} closedModalHandler={closedModalHandler}/>

      <button 
        style={{ backgroundColor: `#fff`}} 
        onClick={() => setShow(true)}
      > criar conta</button>
      </Background>
    </>
  )
}

export default Test;