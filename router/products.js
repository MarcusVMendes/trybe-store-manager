const router = require('express').Router();
const { 
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} = require('../controllers/products');

router.post('/', createProductController);
router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.put('/:id', updateProductController);

module.exports = router;