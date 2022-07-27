export const commaFormat = (str) => {
  const currency = "$";
  let price = "";
  if (typeof str === "number") {
    price = currency + " " + str.toFixed(2);
  }
  if (typeof str === "string") {
    const parsed = Number(str);
    if (!isNaN(parsed)) {
      price = currency + " " + parsed.toFixed(2);
    } else {
      price = "--";
    }
  }

  return price;
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
