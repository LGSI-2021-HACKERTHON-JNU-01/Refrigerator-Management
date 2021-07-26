import React, { useState } from "react";
import "./RecipePanel.css";
import Axios from "axios";
import { v4 as uuidv4 } from "react";
import Recipe from "../components/Recipe";
import RecipeDetails from "../components/RecipeDetails";
import Alert from "../components/Alert";
import Scroller from '@enact/sandstone/Scroller';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      let result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <Scroller>
    <div className="App">
      <h1>Search Recipe</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
            <RecipeDetails
            key={recipe.recipe.lable}
            title={recipe.recipe.lable} 
            calories={recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
            ))}
      </div>
    </div>
    </Scroller>
  );
}

export default App;