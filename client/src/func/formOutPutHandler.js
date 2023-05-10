export const formOutPutHandler = ({ target }) => {
  const name = target[1].value;
  const tel = target[2].value;

  const listOfAvailableFoods = () => {
    let listOfFoods = "";

    for (let i = 3; i <= target.length - 3; i++) {
      if (target[i].value === "" || target[i].value === "0") continue;

      listOfFoods +=
        Number.parseInt(target[i].value) + " " + target[i].name + ", ";
    }

    return listOfFoods;
  };

  const orderDate = new Date().toISOString().replace("Z", "+00:00");

  const address = target[target.length - 2].value;

  return {
    name,
    orders: listOfAvailableFoods(),
    orderDate,
    address,
    tel,
  };
};
