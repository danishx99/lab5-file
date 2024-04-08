const cars = require("../cars.json");

module.exports = async function addCar(context, req) {
  try {
    const newCar = req.body;
    cars.push(newCar);
    context.res = {
      body: newCar,
    };
  } catch (error) {
    context.res = {
      body: { message: "Error adding car", error },
    };
  }
};
