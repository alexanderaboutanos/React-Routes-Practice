/** @format */

import { useParams } from "react-router";
import { Redirect } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const params = useParams();
  const dog = dogs.filter((d) => {
    return d.name.toLowerCase() === params.name;
  });
  if (dog.length < 1) {
    return <Redirect to="/dogs" />;
  }
  return (
    <div>
      <h1>Dog Details</h1>
      <ul>
        {dog.map((d) => {
          return (
            <li style={{ border: "dashed" }}>
              <h2>{d.name}</h2>
              <p>Age: {d.age}</p>
              <ul>
                <h4>Facts: </h4>
                {d.facts.map((f) => {
                  return <li>{f}</li>;
                })}
              </ul>
              <img src={d.src} alt={d.name}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DogDetails;
