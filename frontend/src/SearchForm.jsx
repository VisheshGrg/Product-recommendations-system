import React, { useState } from 'react';
import './SearchForm.css'; // Import your custom CSS file for SearchForm styling
import DishGrid from './DishGrid';

function SearchForm() {
  const [dishName, setDishName] = useState('');

  const [isVisible,setisVisible] = useState(false)
  

  const handleChange = (e) => {
    e.preventDefault();
    setisVisible(true)
  }

  return (
    <div className="search-form">
      <div className='searchbar'>
        <input
          type="text"
          placeholder="Enter Dish Name"
          value={dishName}
          onChange={(e) => 
            {setDishName(e.target.value)
            setisVisible(false)}
          }
        />
        <button onClick={handleChange}>Search</button>
      </div>
      {isVisible && <DishGrid name={dishName}/>}
    </div>
  );
}

export default SearchForm;
