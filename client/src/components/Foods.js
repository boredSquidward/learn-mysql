import React from "react";

import styles from "../styles/foods.module.css";
import FoodItem from "./FoodItem";

const Foods = () => {
  const [foods, setFoods] = React.useState(undefined);

  React.useEffect(() => {
    const getPrices = async () => {
      const res = await fetch("http://localhost:8000/prices");
      const data = await res.json();
      setFoods(data);
    };

    getPrices();
  }, []);

  return (
    <div className={styles.container}>
      {foods && foods.map((item) => <FoodItem data={item} key={item.id} />)}
    </div>
  );
};

export default Foods;
