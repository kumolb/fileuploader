const groupController = require("../controller/group.controller");

const route = require("express").Router();

route.post("/", groupController.addGroup);

route.get("/", groupController.getGroup);

module.exports = route;