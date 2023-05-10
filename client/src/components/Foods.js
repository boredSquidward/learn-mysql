import React from "react";

import styles from "../styles/foods.module.css";
import { itemDisplayer } from "../func/itemDisplayer";

const Foods = ({ totalPrice }) => {
  const [priceArr] = React.useState([]);
  const [foods, setFoods] = React.useState(undefined);

  const totalPriceHandler = (id, price) => {
    priceArr[id - 1] = price;

    const total = priceArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    totalPrice(total);
  };

  React.useEffect(() => {
    const getPrices = async () => {
      const res = await fetch("http://localhost:8000/prices");
      const {data} = await res.json();
      setFoods(data);
    };

    getPrices();
  }, []);

  return (
    <div className={styles.container}>
      {foods ? (
        itemDisplayer(foods, totalPriceHandler)
      ) : (
        <h5 style={{ textAlign: "center" }}>OUT OF ORDER</h5>
      )}
    </div>
  );
};

export default Foods;
