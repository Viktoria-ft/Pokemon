import React from 'react';
import './Intro.scss'
import IntroMessage from './IntroMessage/IntroMessage';
import img2 from './welcome_screen_1 1.jpg';
import img3 from './tap.png';

const Intro = () => {
  return (
    <>
      <section className='wrapper'>
          <div className='intro'>
              <h1 className='intro__title'>This is an Internal test task</h1>
                
                 <div className='intro__content'>
                  <IntroMessage/>          
                  <img className='intro__image' src={img2} alt='pokemon' width='359' height='400'/>
                  
                </div> 
                <div className='intro__tap'>
                    <span>Tap to scroll down</span>  
                    <img className='intro__tap--image' src={img3} alt='tap to scroll' width='42' height='36'/> 
                </div>    
          </div>        
       </section>
     
    </>
  );
}

export default Intro;