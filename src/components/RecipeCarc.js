import React from "react";

const RecipeCarc = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="card-image"
      />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal.php?c=" + idMeal} target="_blank" rel="noopener noreferrer">
          Ingredients
        </a>
      </div>
    </div>
  );
};

export default RecipeCarc;
