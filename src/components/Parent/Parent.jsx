/* eslint-disable react/prop-types */
import Child from "../Child/Child";
const Parent = ({ name, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      {children.map((child, index) => (
        <Child key={index} name={child.name} age={child.age} grandchildren={child.grandchildren} />
      ))}
    </div>
  );
};
export default Parent;