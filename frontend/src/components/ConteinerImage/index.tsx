import React from 'react';

import StackSocial from '../../assets/images/icon.svg';

import { Img } from './style';

const Conteiner: React.FC = () => {
  return(
    <Img>
      <img src={StackSocial} alt="Stack Social"/>
    </Img>
  )
}

export default Conteiner;