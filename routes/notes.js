const express = require("express");
const router = express.Router();

const Note = require("../models/note")

router.get('/', (req,res) => {
    res.render('index');
})

module.exports = {router}