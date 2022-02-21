import React from 'react';
import logo3 from '../../assets/images/logos/turtle-svg-logo-3.svg';
import '../../App.css';
import '../../index.css';

function Navigation(props) {
  // const {
  //   contactSelected,
  //   setContactSelected,
  //   resumeSelected,
  //   setResumeSelected,
  //   portfolioSelected,
  //   setPortfolioSelected
  // } = props;

  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

  /* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
      <div className="flex items-left justify-between flex-shrink-0 text-white hover:text-lime-400 mr-6">
        
        <a href="#about" className="flex" onClick={() => props.handlePageChange('about')}>
          <img src={logo3} alt="logo" width="54" className="pl-2"/>
          <span className="pl-2 font-semibold text-xl ">Danny Urkov</span>
        </a> 
      </div>

      {/* Main Nav Bar - md and lg screens */}
      <div className="flex hide-menu items-center justify-evenly flex-shrink-0 text-white mr-6">
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="items-start inline mt-4 md:inline-block lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 nav-item" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link-active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
            ))}
        </ul>
       
      </div>


      {/* Mobile Nav Bar  - sm screens*/}
      <div class="block show-hamburger">
        <button onClick={openNav} class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-lime-400 hover:border-lime-400">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      
      <div id="myNav" class="overlay">
        <button class="closebtn" onClick={closeNav}>&times;</button>
        <div class="overlay-content">
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="text-white nav-item" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
            ))}
        </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navigation;