const express = require("express");
const router = express.Router();
const controller = require(`../controller/notes.controller`)

router.get(`/home`, controller.homePage)
router.get(`/createnotes`, controller.createNotes)
router.post(`/allnotes`, controller.allNotes)
module.exports = router