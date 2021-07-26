// eslint-disable-next-line
import React from 'react';
//import { v4 as uuidv4 } from "react";

const RecipeDetails = ({ title, calories, image, ingredients }) => {
  return (
    <div className="ingredient-list">
      <h1>{title}</h1>
      <ol className="ingredient-text">
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className="ingredient-image" src={image} alt="" />
    </div>
  );
};

export default RecipeDetails;
