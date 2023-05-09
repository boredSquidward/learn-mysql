import React from "react";

const FoodItem = ({ data }) => {
  return (
    <label>
      <span>{data.foodName}</span>
      <span style={{ fontSize: "14px" }}>
        <code>${data.price}</code>
      </span>
      <input type="number" placeholder="0" style={{ width: "40px" }} min={0} />
    </label>
  );
};

export default FoodItem;
