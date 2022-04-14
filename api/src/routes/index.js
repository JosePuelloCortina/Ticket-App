const { Router } = require("express");


const router = Router();
const user = require("./User")
const movies = require("./movie");
// router.use("/tiket", ticket);

router.use("/user", user);
router.use("/movies", movies);

module.exports = router;