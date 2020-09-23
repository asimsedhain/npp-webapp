import React from 'react';
//mport logo from './logo.svg';
import './App.css';

import Overlay from 'react-image-overlay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Overlay
         url='https://www.uttyler.edu/images/shared/wallpaper/2560widescreen/tower.jpg' // required
         Image overlayUrl= 'utt logo.png' // required
         imageHeight={1000}
         imageWidth = {1000}
         position={'center'}
         overlayWidth={50}
         overlayHeight={50}
         overlayPadding={10}
         watermark={false}
        />

        
        <p>
          Edit <code>src/App.js</code> and save to reload.
		
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
