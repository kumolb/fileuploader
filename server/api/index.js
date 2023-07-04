const route = require("express").Router();
const mealRoute = require("./meal.route");
route.use(mealRoute);

module.exports = route;