import React from "react";

import styles from "../styles/foods.module.css";
import FoodItem from "./FoodItem";

const Foods = () => {
  const [priceArr] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [foods, setFoods] = React.useState(undefined);

  const totalPriceHandler = (id, price) => {
    priceArr[id - 1] = price;

    const total = priceArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setTotalPrice(total);
  };

  React.useEffect(() => {
    const getPrices = async () => {
      const res = await fetch("http://localhost:8000/prices");
      const data = await res.json();
      setFoods(data);
    };

    getPrices();
  }, []);

  React.useEffect(() => {
    console.log(totalPrice);
    console.log(priceArr);
  }, [totalPrice, priceArr]);

  const itemDisplayer = () =>
    foods.map(
      (item) =>
        item.availability === 1 && (
          <FoodItem
            data={item}
            key={item.id}
            totalPriceHandler={totalPriceHandler}
          />
        )
    );

  return (
    <div className={styles.container}>
      {foods ? (
        itemDisplayer()
      ) : (
        <h5 style={{ textAlign: "center" }}>OUT OF ORDER</h5>
      )}
      <code style={{ margin: "10px 0" }}>Total: ${totalPrice}</code>
    </div>
  );
};

export default Foods;
