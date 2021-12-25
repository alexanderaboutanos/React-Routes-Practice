/** @format */

import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const ColorPage = ({ colors }) => {
  const history = useHistory();
  let params = useParams();
  let color = colors.filter((c) => {
    return c === params.color;
  })[0];
  if (!color) {
    history.push("/colors");
  }
  color = "#" + color;
  return (
    <div
      style={{
        backgroundColor: color,
        width: "4000px",
        height: "1000px",
      }}
    ></div>
  );
};

export default ColorPage;
