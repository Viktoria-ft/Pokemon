/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Title from '../Title/Title';
import './MapSection.scss'

const MapSection = () => {
  return (
    <>
      <div className='wrapper'>
        <Title  text={'Map'}/>
      </div>
      <section >         
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20340.78474328394!2d30.59006985!3d50.41132735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1629403235988!5m2!1suk!2sua" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </section>     
    </>
  );
}

export default MapSection;