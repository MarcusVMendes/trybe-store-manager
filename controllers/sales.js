const {
  createSalesService,
} = require('../services/sales');

// Requisito 5
const createSalesController = async (req, res, next) => {
  try {
    const sale = await createSalesService(req.body);
    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSalesController,
};