import React from 'react';

import { ButtonMain } from './style';

interface ButtonProps{
  handleModal: Function;
}

const Button: React.FC<ButtonProps> = ( { handleModal, children } ) => 
  <ButtonMain>{ children }</ButtonMain>

export default Button;