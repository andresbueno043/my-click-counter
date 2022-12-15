import './App.css';
import { Button } from './components/button';
import { Counter } from './components/counter';
import React, { useState } from 'react';

function App() {

  const [clickNumber, setClickNumber] = useState(0);

  const clickHandler = () => {
    setClickNumber(clickNumber + 1);
  };

  const resetCounter = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
      <h1 className='title'>My own click counter</h1>
      <div className='main-container'>
        <Counter
          clickNumber={clickNumber}
        />
        <Button 
          text='Click'
          isClickButton={true}
          clickHandler={clickHandler}
        />
        <Button 
          text='Reset'
          isClickButton={false}
          clickHandler={resetCounter}
        />
      </div>
      
    </div>
  );
}

export default App;
