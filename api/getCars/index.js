const cars = require("../cars.json");

module.exports = async function getCars(context, req) {
  context.res = {
    body: cars,
  };
};
