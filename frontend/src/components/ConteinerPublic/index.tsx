import React from 'react';

import { Conteiner } from './style';

interface ConteinerPublicProps {
  width: string;
  height: string;
}

const ConteinerPublic: React.FC<ConteinerPublicProps> = ( props ) => {
  return(
    <>
      <Conteiner width={props.width} height={props.height}>
        { props.children }
      </Conteiner>
    </>
  )

}

export default ConteinerPublic;