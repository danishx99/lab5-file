const cars = require("../cars.json");

module.exports = async function (context, req) {
  const id = req.params.id;
  const index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);
  context.res = { message: `Car with id ${id} deleted` };
};
