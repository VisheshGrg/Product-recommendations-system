import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';


function App() {
  const [isVisible,setisVisible] = useState(false)

  const handleVisibility = () => {
    setisVisible(true)
  }

  return (
    <div className="App">
      {/* <div className='forrm-containe'> */}
      <h2 className='flipkart-head'>Flipkart grid 5.0</h2>
      <h1>What's on your mind?</h1>
      <h2>Dishes based on your search...</h2>
      <SearchForm/>
      
    </div>
  );
}

export default App;
