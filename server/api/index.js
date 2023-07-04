const route = require("express").Router();
const mealRoute = require("./meal.route");
const groupRoute = require("./group.route");
const userRoute = require("./user.route");

route.use("/meal", mealRoute);
route.use("/group", groupRoute);
route.use("/user", userRoute);
module.exports = route;