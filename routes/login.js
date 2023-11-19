"use strict";

const router = require("express").Router(),
    loginController = require("../controllers/login");

router.get("/", loginController.fetchData);
router.post("/", loginController.insertData);
// router.put("/:id",usersController.update);
// router.delete("/:id",usersController.delete);

module.exports = router;
