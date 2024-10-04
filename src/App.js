import React, { useState } from 'react';
import './App.css'

import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setInputValue('');
  };

  return (
    <div className='app-container'>
      <h1>Пользователь ввёл: </h1>
      <p>{inputValue}</p>
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default App; 
