import React, { InputHTMLAttributes } from 'react';

import { InputMain } from './style';
type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ( {...rest } ) => <InputMain {...rest}/>

export default Input;