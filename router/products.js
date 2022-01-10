const router = require('express').Router();
const { 
  createProductController,
  getAllProductsController,
  getProductByIdController,
} = require('../controllers/products');

router.post('/', createProductController);
router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);

module.exports = router;