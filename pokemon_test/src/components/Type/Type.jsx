import React from 'react';
import './Type.scss'


const Type = ({text}) => {
  return (    
      <span className={`type type--${text}`}>
        {text}
      </span>     
  );
};

export default Type;