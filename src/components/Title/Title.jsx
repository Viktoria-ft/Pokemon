import React from 'react';
import './Title.scss'

const Title = (props) => {
  const { text } = props;
  return (
    
      <span className={'section-title'}>
        {text}
      </span>
      
  );
};

export default Title;