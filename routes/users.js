"use strict";

const router = require("express").Router(),
    usersController = require("../controllers/users");

router.get("/", usersController.fetchData);
router.post("/", usersController.insertData);
// router.put("/:id",usersController.update);
// router.delete("/:id",usersController.delete);

module.exports = router;
