import React from 'react';
import logo from '../../assets/images/logos/neon-bar-circular.png';
import Navigation from '../Navigation'
import '../../App.css';
import '../../index.css';


function Header(props) {
  const { currentPage, handlePageChange } = props;

  return(
    <header className=''>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  
  )
  
}

export default Header;
