import React from 'react';

import { Conteiner } from './style';

const ConteinerPublic: React.FC = ( { children } ) => {
  return(
    <>
      <Conteiner>
        { children }
      </Conteiner>
    </>
  )

}

export default ConteinerPublic;