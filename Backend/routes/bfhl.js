const express = require("express");
const router = express.Router();
const bfhlController = require("../controllers/bfhlController");
const validateInput = require("../middleware/validateInput");

router.post("/", validateInput, bfhlController.processBfhlPost);
router.get("/", bfhlController.getBfhlOperationCode);

module.exports = router;
