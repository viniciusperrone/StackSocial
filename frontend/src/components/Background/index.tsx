import React from 'react';

import { BackgroundConteiner } from './style';

const Background: React.FC = ( { children } ) => {
  return (
    <BackgroundConteiner>
      { children } 
    </BackgroundConteiner>
  )
}

export default Background;