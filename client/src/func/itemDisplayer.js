import FoodItem from "../components/FoodItem";

export const itemDisplayer = (foods, totalPriceHandler) =>
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
