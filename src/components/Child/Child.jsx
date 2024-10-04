/* eslint-disable react/prop-types */
import Grandchild from "../Grandchild/Grandchild";

const Child = ({ name, age, grandchildren }) => {
  return (
    <div>
      <h2>{name} - Age: {age}</h2>
      {grandchildren.map((grandchild, index) => (
        <Grandchild key={index} name={grandchild.name} hobby={grandchild.hobby} />
      ))}
    </div>
  );
};
export default Child;