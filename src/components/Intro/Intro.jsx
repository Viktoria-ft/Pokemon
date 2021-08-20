import React from 'react';
import './Intro.scss'
import IntroMessage from './IntroMessage/IntroMessage';
import img2 from './welcome_screen_1 1.jpg';
import img3 from './tap.png';

const handleScroll = (e) => {
  const targetId = e.target.dataset.targetId;
  if(targetId) {
    const targetElement = document.getElementById(targetId);
    const scrollDistance = targetElement.getBoundingClientRect().top;
    processScroll(scrollDistance);
  }
}

const processScroll = (dimenY) => {
  __processScroll(dimenY, 0, 1);
}

const __processScroll = (distanceLeft, distanceCovered, stepSize) => {
  setTimeout(() => {
    if(distanceLeft > distanceCovered) {
      stepSize = 1.1*stepSize;
    } else {
      stepSize = Math.ceil(0.91*stepSize);
    }
    window.scrollTo(0, distanceCovered);
    if(distanceLeft > 0) {
      __processScroll(distanceLeft - stepSize, distanceCovered + stepSize, stepSize);
    }
  }, 10);
}


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
                  <button
                    className="intro__tap--scroll"
                    data-target-id="target"
                    onClick={handleScroll}
                    >
                     <span>Tap to scroll down</span>  
                     <img data-target-id="target" className='intro__tap--image' src={img3} alt='tap to scroll' width='42' height='36'/> 
                  </button>
                </div>    
          </div>        
       </section>     
    </>
  );
}

export default Intro;