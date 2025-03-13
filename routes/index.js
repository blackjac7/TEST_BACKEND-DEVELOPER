const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");
const userRoute = require("./userRoute");
const searchRoute = require("./searchRoute");
const authMiddleware = require("../middleware/authentication");

router.use("/auth", authRoute);
router.use("/users", authMiddleware, userRoute);
router.use("/search", authMiddleware, searchRoute);

module.exports = router;
