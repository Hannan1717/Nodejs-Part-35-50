const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/user");

router.route("/users").get(usercontroller.getusers).post(usercontroller.post);

router.put("/users/:id", usercontroller.update);

router.delete("/users/:id", usercontroller.delete);

module.exports = router;
