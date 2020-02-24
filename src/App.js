import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    // LOAD LINKEDIN ONCE
    let s = document.createElement('script');
    s.src = 'https://platform.linkedin.com/badges/js/profile.js';
    s.type ='text/javascript';
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
  });


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="app-wrapper">
        <div className="internal"></div>
        <div className="external">
          <div className="github-widget" data-username="desidia26"></div>
          <div className="LI-profile-badge"
            data-version="v1" 
            data-size="large" 
            data-locale="en_US" 
            data-type="vertical" 
            data-theme="dark" 
            data-vanity="benjamin-banister-95622b121">
              <a class="LI-simple-link" href='https://www.linkedin.com/in/benjamin-banister-95622b121?trk=profile-badge'>
                Benjamin Banister
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
