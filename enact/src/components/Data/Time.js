const today = new Date();

const Time = () => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const time = year + month + date;

  return time;
};

export default Time;
