const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/stats", mainController.getStats);
router.get("/match", mainController.getMatch);
