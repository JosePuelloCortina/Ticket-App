const { Router } = require("express");


const router = Router();
const user = require("./User")
const movies = require("./movie");
const admin = require("./Admin");


router.use("/user", user);
router.use("/movies", movies);
router.use("/admin", admin);


module.exports = router;