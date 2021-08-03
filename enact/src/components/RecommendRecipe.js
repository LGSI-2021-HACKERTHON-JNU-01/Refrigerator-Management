import { func } from 'prop-types';
import React, {
  fetch,
  TextDecoder,
  float,
  len,
  list,
  range,
  min,
  set,
} from 'react';
import CSVReader from 'react-csv-reader';

const expiration = [];
('/home/subin/hackerthon/enact/src/components/data/expiration_data.csv');

function csvRead() {
  fetch('./data/foodList.csv').then(function (response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    reader.read().then(function (result) {
      return decoder.decode(result.value);
    });
  });
}

function addExpirationDates({ user, expiration }) {
  // eslint-disable-next-line
  for (let userItem in user) {
    // eslint-disable-next-line
    const curr = userItem['name'];
    const currSplit = curr.split(' ');
    let currMax = [0, float('inf')];
    let exactMached = false;
    // eslint-disable-next-line
    for (let expItem in expiration) {
      if (curr === expItem.name) {
        userItem.expreIn = expItem.expireIn;
        exactMached = true;
        break;
      }
      const expItemSplit = expItem.name.split(' ');
      let overlapped = 0;
      // eslint-disable-next-line
      for (let i in currSplit) {
        if (i in expItemSplit) {
          overlapped += 1;
        }
      }
      if (overlapped > currMax[0]) {
        currMax = [overlapped, expItem.expireIn];
      } else if (overlapped === currMax[0]) {
        currMax[1] = min(currMax[1], expItem.expireIn);
      }
    }
    if (currMax[0] > 0) {
      userItem.expireIn = currMax[1];
      // eslint-disable-next-line
    } else if (!exactMatched) {
      userItem.expireIn = -1;
    }
  }
}

function generateParsed({ item, foodList }) {
  const result = [];
  // eslint-disable-next-line
  if (item in foodList) result += [item];
  else {
    // eslint-disable-next-line
    for (let w in item.split(' ')) {
      if (w in foodList) {
        // eslint-disable-next-line
        result += [w];
      }
    }
  }
  return list(set(result));
}

function addParsedUserData({ user, foodList }) {
  // eslint-disable-next-line
  for (let item in user) {
    item.parsed_name = generateParsed({ item, foodList });
  }
}

function calculateOverlapScore({ user, recipe }) {
  let score = 0;
  // eslint-disable-next-line
  for (let userItem in user) {
    // eslint-disable-next-line
    for (let i in userItem.parsed_name) {
      if (i in recipe.ingredients_processed) {
        score += 1;
      }
    }
  }
  return score;
}

function createUserDict() {
  const user = [];
  // eslint-disable-next-line
  for (const name in names) user += [{ name }];
  addExpirationDates();
  addParsedUserData();
  return user;
}

function recipeRank({ user, recipe }) {
  const scoreArray = new Array(len(recipe)).fill(0);
  // eslint-disable-next-line
  for (const i in range(len(recipe))) {
    const recipe = recipe[i];
    const a = calculateOverlapScore({ user, recipe });
    const b = 10 * calculateOverlapScore({ user, recipe });
    const curr_score = a + b;
    scoreArray[i] = curr_score;
  }
  return scoreArray.sort().reverse();
}

function Recommend(lst) {
  const user = createUserDict(lst);
  const ranking = recipeRank();
  const result = [];
  // eslint-disable-next-line
  for (const i in range(5)) result.append(recipe[ranking[i].id]);
  return <div>{result}</div>;
}

export default { Recommend };
