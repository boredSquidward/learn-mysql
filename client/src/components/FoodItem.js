import React from "react";

const FoodItem = ({ data, totalPriceHandler }) => {
  const addPriceHandler = ({ target }) => {
    const value = +target.value;
    const id = target.id;

    const multiply = value * Number.parseFloat(data.price);

    totalPriceHandler(id, +multiply.toFixed(2));
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
        name={data.foodName}
        style={{ width: "40px" }}
        min={0}
        onChange={addPriceHandler}
        id={data.id}
      />
    </label>
  );
};

export default FoodItem;
