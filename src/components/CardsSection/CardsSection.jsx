import React from 'react';
import Card from '../Card/Card';
import Title from '../Title/Title';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg'
import './CardsSection.scss';

const CardsSection = () => {
  return (
    <>
      <section id="target" className='wrapper'>
          <Title   text={'Cards'}/>
          <div  className='cards__container'>
            <Card  image={image1} title={'Emboar'} imageName={'Emboar'} generation={'5'} text={['fighting', 'fire']} />
            <Card  image={image2} title={'Darkrai'} imageName={'Darkrai'} generation={'4'} text={['dark']} />
            <Card  image={image1} title={'Diggersby'} imageName={'Diggersby'} generation={'5'} text={['normal', 'ground']} />            
          </div>
      </section>
     
    </>
  );
}

export default CardsSection;