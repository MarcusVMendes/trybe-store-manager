const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required().message({
    min: '"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number.greater(0).required.message({
    number: '"quantity" must be a number',
    greater: '"quantity" must be larger than or equal to 1',
  }),
});

module.exports = { productSchema };