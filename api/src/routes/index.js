const {Router} = require("express");


const router = Router();
const user = require("./User")
// router.use("/tiket", ticket);

router.use("/user", user);

module.exports = router;