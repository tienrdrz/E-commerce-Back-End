const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET all tags including associated Product data
router.get('/', (req, res) => {

});

// GET a single tag including associated Product data
router.get('/:id', (req, res) => {

});

// POST a new tag
router.post('/', (req, res) => {

});

//PUT to update a tag through id
router.put('/:id', (req, res) => {

});

// DELETE to destroy a tag through id
router.delete('/:id', (req, res) => {

});

module.exports = router;