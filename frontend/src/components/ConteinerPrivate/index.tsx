import React from 'react';

import { Conteiner } from './style';

const ConteinerPrivate: React.FC = ( { children } ) => {
  return(
    <Conteiner>
      { children }
    </Conteiner>
  )
}

export default ConteinerPrivate;