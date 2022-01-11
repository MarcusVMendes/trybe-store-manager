const {
  createSalesService,
  getAllSalesService,
  getSaleByIdService,
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

// Requisito 6
const getAllSalesController = async (_req, res, next) => {
  try {
    const sales = await getAllSalesService();
    
    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const getSaleByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await getSaleByIdService(id);

    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSalesController,
  getAllSalesController,
  getSaleByIdController,
};