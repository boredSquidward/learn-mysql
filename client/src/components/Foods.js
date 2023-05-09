import React from "react";

import styles from "../styles/foods.module.css";
import FoodItem from "./FoodItem";

const Foods = () => {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [foods, setFoods] = React.useState(undefined);

  const totalPriceHandler = (prices) => {
    console.log(prices);
    console.log(totalPrice);
    setTotalPrice((prev) => prev + prices);
  };

  React.useEffect(() => {
    const getPrices = async () => {
      const res = await fetch("http://localhost:8000/prices");
      const data = await res.json();
      setFoods(data);
    };

    getPrices();
  }, []);

  // React.useEffect(() => {
  //   console.log(totalPrice);
  // }, [totalPrice]);

  return (
    <div className={styles.container}>
      {foods ? (
        foods.map(
          (item) =>
            item.availability === 1 && (
              <FoodItem
                data={item}
                key={item.id}
                totalPriceHandler={totalPriceHandler}
              />
            )
        )
      ) : (
        <h5 style={{ textAlign: "center" }}>OUT OF ORDER</h5>
      )}
      <code style={{ margin: "10px 0" }}>Total: ${totalPrice}</code>
    </div>
  );
};

export default Foods;
