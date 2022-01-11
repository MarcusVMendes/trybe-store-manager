const express = require('express');
const productsRouter = require('./router/products');
const salesRouter = require('./router/sales');
const error = require('./middlewares/error');

const app = express();

const PORT = 3000;

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);

app.use('/sales', salesRouter);

app.use(error);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
