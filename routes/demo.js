"use strict";

const router = require("express").Router(),
    demoController = require("../controllers/demo");

router.get("/", demoController.fetchData);
// router.post("/", getUserDataController.insertData);
// router.put("/:id",usersController.update);
// router.delete("/:id",usersController.delete);

module.exports = router;
