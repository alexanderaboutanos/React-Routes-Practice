/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const INITIAL_STATE = { color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("TARGET", formData);
    addColor({ ...formData });
    setFormData(INITIAL_STATE);
    history.push("/colors");
  };
  /** Update local state w/curr state of input elem */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };
  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">color:</label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Make new color page!</button>
    </form>
  );
};

export default NewColorForm;
