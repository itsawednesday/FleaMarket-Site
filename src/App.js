import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import AddMarket from './components/AddMarket'
import { GlobalProvider } from './global/GlobalState';

import NavBar from './components/NavBar';

import Banner from './components/Banner';


import flea from './assets/flea.jpeg';



  const App = () => {


    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [navBgColor, setNavBgColor] = useState(false);
  
    const homeRef = useRef();
    const marketRef = useRef(); 
    //const skillsRef = useRef(); 

    const homeClick = () => {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  
  
  
    const marketClick = () => {
      marketRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsNavExpanded(false);
    }
  
    // const skillsClick = () => {
    //   skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    //   setIsNavExpanded(false);
    // }
  
  
    
  
      
    return (
      <div className='main-container' ref={homeRef}>
        <NavBar 
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
          navBgColor={navBgColor}
          setNavBgColor={setNavBgColor}
          homeClick={homeClick}
          marketClick={marketClick}
         // skillsClick= {skillsClick}
          
        
            />
    
   
       
        
        
          <div className='intro-box'>
            <Banner />
          </div>
         
     
  
        {/* main body begin */}
        <div className='main-body-box'>
  
  
          <div className='Market-box' ref={marketRef}>
              <AddMarket />
          </div>
  
          
         
  
          {/* <div className='skills-box' ref={skillsRef}>
              <Skills />
          </div> */}
         
         
  
         
        </div>
      </div>
   
    );
  }
  
  export default App;

  {/* //   return (
//     <GlobalProvider> 
//      < AddMarket/>
//     </GlobalProvider>
//   );
// } */}


