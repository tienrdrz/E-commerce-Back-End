const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET all tags including associated Product data
router.get('/', (req, res) => {
    Tag.findAll({
      // Products included here
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
          through: ProductTag
        }
      ]
    })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  

// GET a single tag including associated Product data
  router.get('/:id', (req, res) => {
    Tag.findOne({
      // ID is needed and set here
      where: {
        id: req.params.id
      },
      // Products included here
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
          through: ProductTag  
        }
      ]
    })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id'});
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  //POST a new tag
  router.post('/', (req, res) => {
    Tag.create({
      id: req.body.id,
      tag_name: req.body.tag_name
    })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  //PUT to update a tag through its id
  router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(tagData => {
      if(!tagData[0]) {
        res.status(404).json({ message: 'No tag found with this id'});
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  });
  
  //DELETE a tag through its id
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(tagData => {
      if(!tagData) {
        res.status(404).json({ message: 'No tag found with this id'});
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  });

module.exports = router;