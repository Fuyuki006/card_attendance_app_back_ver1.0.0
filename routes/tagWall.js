"use strict";

const router = require("express").Router(),
    tagWallController = require("../controllers/tagWall");

// router.get("/:contentType", tagWallController.fetchData);
router.post("/:contentType", tagWallController.insertData);
router.put("/:contentType",tagWallController.update);
// router.delete("/:id",usersController.delete);

module.exports = router;
