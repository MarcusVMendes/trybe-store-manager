const Joi = require('@hapi/joi');

const saleSchema = Joi.object({
  quantity: Joi.number().greater(0).required().messages({
    'number.base': 'Wrong product ID or invalid quantity',
    'number.greater': 'Wrong product ID or invalid quantity',
  }),
});

module.exports = { saleSchema };