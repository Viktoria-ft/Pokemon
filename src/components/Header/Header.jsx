import React from 'react';
import img from './pokemon-8 1.png'
import './Header.scss'

const Header = () => {
  return (
    <>
      <div className='header'>
          <div>
            <img className='logo' src={img} alt='logo' width='141' height='61'/>
          </div>
          
    
      </div>
     
    </>
  );
}

export default Header;