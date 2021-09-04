const express = require('express');
const app = express();
const products = require('./routes/products');
const carts = require('./routes/cartsRouter');
app.use(express.json());
app.use(products);
app.use(carts);

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
