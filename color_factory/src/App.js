/** @format */

import "./App.css";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage";
import NewColorForm from "./NewColorForm";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const initialState = ["FF0000", "00FFFF", "0000FF"];
  const [colors, setColors] = useState(initialState);
  const addColor = ({ color }) => {
    color = color.substring(1);
    setColors((colors) => [...colors, color]);
    console.log("colors", colors);
    <Redirect to="/colors" />;
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <ColorPage colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
