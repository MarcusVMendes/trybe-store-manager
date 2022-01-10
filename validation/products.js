const Joi = require('@hapi/joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number().greater(0).required().messages({
    'number.base': '"quantity" must be a number',
    'number.greater': '"quantity" must be larger than or equal to 1',
  }),
});

module.exports = { productSchema };

/*
string.min
Specifies the minimum number string characters.

number.base
The value is not a number or could not be cast to a number.

number.greater
The number is lower or equal to the limit that you set.

https://joi.dev/api/?v=17.5.0
*/