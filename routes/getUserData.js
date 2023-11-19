"use strict";

const router = require("express").Router(),
    getUserDataController = require("../controllers/getUserData");

// router.get("/", getUserNamebyEmailController.fetchData);
router.post("/", getUserDataController.insertData);
// router.put("/:id",usersController.update);
// router.delete("/:id",usersController.delete);

module.exports = router;
