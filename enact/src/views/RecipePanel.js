// eslint-disable-next-line
import React, { useState } from 'react';
import './RecipePanel.css';
// eslint-disable-next-line
import Axios from 'axios';
// eslint-disable-next-line
import { v4 as uuidv4 } from 'react';
// eslint-disable-next-line
//import Recipe from '../components/Recipe';
import RecipeDetails from '../components/RecipeDetails';
import Alert from '../components/Alert';
import Scroller from '@enact/sandstone/Scroller';
import RandomMeal from '../components/Random';
import Meal from '../components/Meal';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = '4e9f05eb';
  const APP_KEY = '9b904d703fa0d46a88ce1ac63f29f498';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      let result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert('No food with such name');
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery('');
      setAlert('');
    } else {
      setAlert('Please fill the form');
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  const onScrollStop = ({scrollBottom, scrollTop}) => {
    // do something with scrollBottom and scrollTop
  }


  return (
    <Scroller>
      
      <div className="App">
        <div className="recommend">
          <h1>Recommend Recipe</h1>
            <div className="one"><RandomMeal /></div>
            <div className="two"><RandomMeal /></div>
            <div className="three"><RandomMeal /></div>
        </div>
        <div className="mar"/>
        <h1>Search Recipe</h1>
        {/* eslint-disable-next-line */}
        <form onSubmit={onSubmit} className="search-form">
          {alert !== '' && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            // eslint-disable-next-line
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <input type="submit" value="Search" />
        </form>
        <div className="ma"/>
        <div className="recipes">
          {recipes.map(recipe => (
            <RecipeDetails
              key={recipe.recipe.lable}
              title={recipe.recipe.lable}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </Scroller>
  );
}

export default App;
