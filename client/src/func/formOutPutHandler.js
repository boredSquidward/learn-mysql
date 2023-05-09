// TODO: keep working on foods array so you can send a readable content to the client
// something like 2 tacos, 1 hotdog, .etc
// store the data which is comming from the form on database
// also, working on total price is vital

export const formOutPutHandler = (e) => {
  const name = e.target[1].value;
  const mobile = e.target[2].value;

  const foods = [
    e.target[3].value === "" ? 0 : Number.parseInt(e.target[3].value),
    e.target[4].value === "" ? 0 : Number.parseInt(e.target[4].value),
    e.target[5].value === "" ? 0 : Number.parseInt(e.target[5].value),
    e.target[6].value === "" ? 0 : Number.parseInt(e.target[6].value),
  ];

  console.log(e);
  console.log(e.target.length);

  const address = e.target[e.target.length - 2].value;

  return {
    address,
    mobile,
    foods,
    name,
  };
};
