import React from 'react';
import logo from './logo.svg';
import './App.css';
import CaptionImage from './components/CaptionImage';

function App() {
  return (
    <div className="App">
      <CaptionImage imgUrl='data:image/jpeg;base64,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' text='구름'/>
    </div>
  );
}

export default App;
