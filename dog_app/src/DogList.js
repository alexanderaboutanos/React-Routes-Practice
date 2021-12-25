/** @format */

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Dog List</h1>
      <ul>
        {dogs.map((m) => {
          return (
            <li style={{ border: "dashed" }}>
              <h2>{m.name}</h2>
              <p>Age: {m.age}</p>
              <ul>
                <h4>Facts: </h4>
                {m.facts.map((f) => {
                  return <li>{f}</li>;
                })}
              </ul>
              <img src={m.src} alt={m.name}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DogList;
