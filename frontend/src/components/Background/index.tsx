import React from 'react';

import { BackgroundConteiner } from './style';

interface BackgroundProps{
  justifyContent: string;
  alignItems: string;
}

const Background: React.FC<BackgroundProps> = (props) => {
  return (
    <BackgroundConteiner 
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      { props.children } 
    </BackgroundConteiner>
  )
}

export default Background;