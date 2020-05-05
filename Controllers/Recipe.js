const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes.js');



// add routes
// Index
router.get('/', (req, res) => {
    // Use Fruits model to get all Fruits


    Recipe.find({}, (error, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes
        })
    });

});
// New
router.get('/new', (req, res) => {
    res.render('New');
});

// Create
router.post('/', (req, res) => {

    // Use Model to create Fruit Document
    Recipe.create(req.body, (error, addRecipe) => {
        console.log(addRecipe)
        // Once created - respond to client
        res.redirect('/FBlog');
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
        res.redirect('/FBlog');
    });
});

/// export router 
module.exports= router;