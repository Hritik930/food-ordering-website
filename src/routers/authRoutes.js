const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js")


router.post("/signup", authController.register)
router.get("/signin", authController.login)

module.exports=router;