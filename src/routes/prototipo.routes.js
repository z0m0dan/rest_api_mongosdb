const express = require("express")

const prototipoCtrl = require("../controllers/distance.contoller")

const router = express.Router();

router.get("/" , prototipoCtrl.getdata)


module.exports = router