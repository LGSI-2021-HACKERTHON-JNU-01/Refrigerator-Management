const today = new Date();

const Time = () => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  // year = toString();
  // month = toString();
  // date = toString();

  const time = `${month}/${date}/${year}`;

  return time;
};

export default Time;
