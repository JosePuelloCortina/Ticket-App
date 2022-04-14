const {Router} = require("express");


const router = Router();
const user = require("./User");
const admin = require("./Admin");

// router.use("/tiket", ticket);

router.use("/user", user);
router.use("/admin", admin);


module.exports = router;