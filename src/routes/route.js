const express = require('express');
const router = express.Router();

const {loginOrg, createOrg, getOrg } = require("../controllers/organizationController")
const { createProp, getProperty } = require("../controllers/propertyController")
const {createCrop, getCrop} = require("../controllers/cropController")

//Organization API
router.post("/login", loginOrg)
router.post("/organization", createOrg)
router.get("/organization", getOrg)
//router.post("/directory/remove", removeDirectory)

//Property API
router.post("/property", createProp)
router.get("/property", getProperty)

//crop API
router.post("/crop", createCrop)
router.get("/crop", getCrop)



module.exports = router;