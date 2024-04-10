const cars = require("../cars.json");

module.exports = async function getCars(context, req) {
  //context.log("JavaScript TEST.");
  context.res = {
    body: cars,
  };
};
