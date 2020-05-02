const express = require('express');
const router = express.Router();
// const Fruit = require('../models/fruits.js');



// add routes
// Index
router.get('/', (req, res) => {
    // Use Fruits model to get all Fruits

    res.render('Index', {})

});


/// export router 
module.exports= router;