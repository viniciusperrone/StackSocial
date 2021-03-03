import React from 'react';

import { InputMain} from './style';

interface InputProps{
  type: string;
}
const Input: React.FC<InputProps> = ( props ) => 
  <InputMain 
    type={props.type}
  />

export default Input;