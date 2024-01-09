const express = require("express")
const router = express.Router()
const {homePage, createUser} = require("../controller/control")

router.get("/", homePage)
router.post("/createuser", createUser)




module.exports = router