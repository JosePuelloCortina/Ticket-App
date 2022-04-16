const { Router } = require("express");

const router = Router();
const user = require("./User");
// router.use("/tiket", ticket);

router.use("/user", user);
router.use("/movies", movies);
router.use("/admin", admin);

router.use("/sucursales", sucursales);
router.use("/ticket", ticket);

module.exports = router;
