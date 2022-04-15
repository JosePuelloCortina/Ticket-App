const { Router } = require("express");


const router = Router();
const user = require("./User")
const movies = require("./movie");
const admin = require("./Admin");
const sucursales = require("./sucursales");


router.use("/user", user);
router.use("/movies", movies);
router.use("/admin", admin);
router.use("/sucursales", sucursales);

 
module.exports = router;