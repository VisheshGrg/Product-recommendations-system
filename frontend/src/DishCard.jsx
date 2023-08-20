import React from 'react';

function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p><button>View dish</button></p>
    </div>
  );
}

export default DishCard;
