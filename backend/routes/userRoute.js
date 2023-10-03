import express from "express";
import controller from "../controllers/userController.js";
const ROUTE = express.Router();

/* route is coded in controllers folder */
ROUTE.route("/linkShortner").post(controller.linkShortner);

export default ROUTE;
