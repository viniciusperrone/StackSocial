import React, { useState } from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';

const Profile: React.FC = () => {
  const [show, setShow] = useState(false);

  function closedModalHandler (){
    return setShow(false);
  }
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        Profile
      </Background>
    </>
  )
}

export default Profile;