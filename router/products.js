const router = require('express').Router();
const { 
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} = require('../controllers/products');

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

module.exports = router;