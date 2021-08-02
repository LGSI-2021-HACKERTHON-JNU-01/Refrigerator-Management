const fs = require('fs');

const FetchData = () => {
  fs.readFile('sample.txt', 'utf8', function (err, data) {
    console.log(data);
  });
};

export default FetchData;
