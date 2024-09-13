import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  // Fetch recipes from Spoonacular API
  const fetchRecipes = async () => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; // Use Vite's way to access env vars
    console.log("API Key:", apiKey); // Ensure the key is being read correctly
    if (!query) {
      setError('Please enter an ingredient.');
      return;
    }
    setError('');
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients: query,
          number: 10,
          apiKey: apiKey,
        },
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  // Fetch full recipe details when a recipe is clicked
  const fetchRecipeDetails = async (id) => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; // Use the same API key
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: apiKey,
        },
      });
      setSelectedRecipe(response.data); // Store selected recipe details in state
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      setError('Could not fetch recipe details. Please try again.');
    }
  };

  // Close the modal
  const closeModal = () => {
    setSelectedRecipe(null); // Reset selected recipe to null
  };

  return (
    <div className="app">
      <h1>Recipe Finder</h1>

      {/* Search input for ingredients */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter ingredients (e.g., chicken, rice)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchRecipes}>Find Recipes</button>
      </div>

      {/* Error message display */}
      {error && <p className="error">{error}</p>}

      {/* Display list of recipes */}
      <div className="recipe-list">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <div
              className="recipe"
              key={recipe.id}
              onClick={() => fetchRecipeDetails(recipe.id)} // Click to fetch details
            >
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <p>
                Used Ingredients: {recipe.usedIngredientCount}, Missing Ingredients: {recipe.missedIngredientCount}
              </p>
            </div>
          ))}
      </div>

      {/* Recipe details modal */}
      {selectedRecipe && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span> {/* Close button */}
            <h2>{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            <p><strong>Ready in:</strong> {selectedRecipe.readyInMinutes} minutes</p>
            <p><strong>Servings:</strong> {selectedRecipe.servings}</p>
            <h3>Instructions</h3>
            <p>{selectedRecipe.instructions || 'Instructions not available'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
