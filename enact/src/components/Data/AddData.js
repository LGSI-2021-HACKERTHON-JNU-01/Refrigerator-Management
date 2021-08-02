const fs = require('fs');

const AddData = ({ ingredientsName, ingredientsNumber }) => {
  const data = {};
  data.table = [];
  const object = {
    name: ingredientsName,
    number: ingredientsNumber,
  };
  data.table.push(object);
  fs.writeFile('Data.json', JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
  });
};

export default AddData;
