const express = require("express");
const adminControllers = require("../controllers/admin");
const router = express.Router();

router.get("/employee/register", adminControllers.getAddEmployee);

module.exports = router;
