import React from 'react';
import Type from '../Type/Type';
import './Card.scss'

const Card = ({
  image,
  imageName,
  height = '261px',
  width = '272px',
  title,
  generation,
  text 
}) => {
  return (
    <div className='card'>
      <img className='card__image' src={image} alt={imageName} style={{ height, width }} />
      <div className='card__content'>
        <h4 className='card__title'>{title}</h4>
        <span className='card__generation'>Generation: {generation}</span>  
        <div>
        <span className='card__type'>Type: {text.map(typeText => <Type text={typeText}/>) }
        </span>        
      </div>   
      <button className='card__button'>Choose</button>
      </div>
    </div>   
    
  );
};

export default Card;