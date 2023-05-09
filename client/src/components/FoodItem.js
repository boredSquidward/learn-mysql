import React from "react";

const FoodItem = ({ data, totalPriceHandler }) => {
  const addPriceHandler = ({ target }) => {
    const value = +target.value;

    const multiply = value * Number.parseFloat(data.price);

    totalPriceHandler(multiply);
  };

  return (
    <label>
      <span>{data.foodName}</span>
      <span style={{ fontSize: "14px" }}>
        <code>${data.price}</code>
      </span>
      <input
        type="number"
        placeholder="0"
        style={{ width: "40px" }}
        min={0}
        onChange={addPriceHandler}
      />
    </label>
  );
};

export default FoodItem;
