import React, { useState } from 'react';


function MainContainer(props) {
  // Using useState, set the default value for currentPage to 'About'
  const { currentPage, renderPage } = props;

  return (
    
    <div className='mainContainer flex items-start justify-center bg-slate-800'>{renderPage(currentPage)}</div>
    
  );
}

export default MainContainer;