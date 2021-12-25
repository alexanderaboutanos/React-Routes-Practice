/** @format */

import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div>
      <div className="Top header">
        {" "}
        <h1>Welcome to the Color Factory</h1>
        <p>
          <Link to="/colors/new">Create new Color</Link>
        </p>
      </div>
      <div>
        <h4>Please select a color</h4>
        {colors.map((c) => {
          return (
            <p>
              <Link to={`/colors/${c}`}>{c}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ColorList;
