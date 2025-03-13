const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.get("/nama", searchController.searchByNama);
router.get("/nim", searchController.searchByNIM);
router.get("/ymd", searchController.searchByYMD);

module.exports = router;
