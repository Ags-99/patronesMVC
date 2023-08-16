const express = require("express");
const mainControllers = require("../controllers/mainControllers");
const mainRouters = express.Router();

mainRouters.get("/", mainControllers.mostrarHome);

mainRouters.get("/about", mainControllers.mostrarAbout);

module.exports = mainRouters;