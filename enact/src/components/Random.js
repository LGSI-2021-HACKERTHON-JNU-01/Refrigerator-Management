<<<<<<< HEAD
/* eslint-disable-next-line*/
=======

>>>>>>> 9f2f29bbc590ca0060a596aaf0217be2dc97db24
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Meal from './Meal';
const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    async function getMeal() {
      const res = await Axios.get(API_URL);
      //const data = await res.json();
      setMeal(res.data.meals[0]);
    }
    getMeal();
  }, []);

  if (!meal) return null;

  return (
    <section className="container1">
      <Meal meal={meal} />
    </section>
  );
};

export default RandomMeal;
