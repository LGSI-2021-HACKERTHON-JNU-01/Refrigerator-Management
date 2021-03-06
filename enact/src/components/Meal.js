// eslint-disable-next-line
import React from 'react';

const Meal = ({ meal }) => {
  if (!meal) return null;
  const { strMealThumb, strMeal, strInstructions, strCategory, strArea } = meal;
  return (
    <div className="meal">
      <div className="meal-img">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="meal-details">
        <h3 className="meal-title">{strMeal}</h3>
        <p className="meal-instruction">
          {strInstructions && strInstructions.substr(0, 150) + '...'}
        </p>
        <ul className="meal-info">
          {/* eslint-disable-next-line*/}
          <li>
            Category
            <strong>{strCategory}</strong>
            {/* eslint-disable-next-line*/}
          </li>
          {/* eslint-disable-next-line*/}
          <li>
            Area
            <strong>{strArea}</strong>
          </li>
          {/* eslint-disable-next-line*/}
          <div></div>
        </ul>
      </div>
    </div>
  );
};

export default Meal;
