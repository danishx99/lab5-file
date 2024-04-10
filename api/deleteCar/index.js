const cars = require("../cars.json");

module.exports = async function (context, req) {
  const index = req.params.index;
  context.log(index);
  const deleteCar = cars[index];
  cars.splice(index, 1);

  context.res = {
    body: deleteCar,
  };
};
