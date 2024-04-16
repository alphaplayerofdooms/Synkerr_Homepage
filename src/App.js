import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src="/image1.png" className="logoI" alt="logo" height={'46px'} width={'46px'}/>
          <h1>Synkerr.</h1>
        </div>
        <div className='info'>
          <h3>Our Aim</h3>
          <h3>Team</h3>
          <h3 className='lastOne '>What we do</h3>
        </div>
          <p className="contact">Contact Us</p>
      </header>

      <body className='Body'>
        <div className='HeroText'>
          <p className='HeroText1'>Exploit the power of</p>
          <p className='HeroText2'>Purposful Connections</p>
          <p className='HeroText3'>Join the Waitlist -{'>'}</p>
          <img src='/image7.png' alt='beta version' height={'24px'}></img>
        </div>
      </body>
    </div>

  );
}

export default App;