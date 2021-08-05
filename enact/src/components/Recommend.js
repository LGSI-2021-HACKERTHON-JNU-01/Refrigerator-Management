import React, { useState } from 'react';
import Axios from 'axios';
import Scroller from '@enact/sandstone/Scroller';
import { number } from 'prop-types';
import RandomMeal from '../components/Random';

function Recommend() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = '4e9f05eb';
  const APP_KEY = '9b904d703fa0d46a88ce1ac63f29f498';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const GetDB = () => {
    Axios.get('luna://com.webos.service.db', {
      method: 'find',
      query: {
        from: 'com.sample.app:1',
      },
    });
  };

  const recommendList = item => {
    const list = [];
    item.map(item => {
      list = item.number.sort();
    });
    return list;
  };

  const getData = async item => {
    if (query !== '') {
      let result = await Axios.get(url);
      if (item != result.data.more) {
        return (
          <div>
            <div className="one">
              <RandomMeal />
            </div>
            <div className="two">
              <RandomMeal />
            </div>
            <div className="three">
              <RandomMeal />
            </div>
          </div>
        );
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery('');
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="recommend">
      {/* eslint-disable-next-line */}
      <div></div>
    </div>
  );
}

export default Recommend;
