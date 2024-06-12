import { useState, useCallback } from "react";
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RecipeCarc from './components/RecipeCarc';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // function to search for the recipes
  const searchRecipes = useCallback(async () => {
    if (query.trim() === "") return; // Prevent search on empty query
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals || []);
    setIsLoading(false);
  }, [query]); // Added query as a dependency

  const handleSubmit = event => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div className="container">
      <Navbar />
      <SearchBar 
        value={query}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        onChange={event => setQuery(event.target.value)} 
      />
      <h2>Our Recipe App</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="recipes">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCarc key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p>No Recipes!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
