import CheckboxItem from '@enact/sandstone/CheckboxItem';

const ShowList = ({ name, number, expirationDate }) => {
  return (
    <div>
      <hr />
      <CheckboxItem onToggle={console.log}>
        <div className="item">
          {name} {number} {expirationDate}
        </div>
      </CheckboxItem>
      <hr />
    </div>
  );
};

export default ShowList;
