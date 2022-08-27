const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GET all categories including the products associated
router.get('/', (req, res) => {
  Category.findAll({
    // Products included here
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//GET a single category including the products associated
router.get('/:id', (req, res) => {
  Category.findOne({
    // ID is needed and set here
    where: {
      id: req.params.id
    },
    // Products included here
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//POST a new category
router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//PUT to update a category through its id
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if(!categoryData[0]) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//DELETE a category through its id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;