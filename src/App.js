import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import logo from './assets/images/logos/neon-bar-circular.png';
import './App.css';


function App() {
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <MainContainer renderPage={renderPage} currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Footer />
    </div> 
  );
}

export default App;
