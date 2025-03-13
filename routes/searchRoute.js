const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

/**
 * @swagger
 * /search/name:
 *   get:
 *     summary: Search user by name
 *     description: Mencari data berdasarkan nama pengguna.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: Turner Mia
 *     responses:
 *       200:
 *         description: Data ditemukan.
 */
router.get("/name", searchController.searchByName);

/**
 * @swagger
 * /search/nim:
 *   get:
 *     summary: Search user by NIM
 *     description: Mencari data berdasarkan NIM.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: nim
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Data ditemukan.
 */
router.get("/nim", searchController.searchByNIM);

/**
 * @swagger
 * /search/ymd:
 *   get:
 *     summary: Search user by YMD
 *     description: Mencari data berdasarkan YMD.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: ymd
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Data ditemukan.
 */
router.get("/ymd", searchController.searchByYMD);

module.exports = router;
