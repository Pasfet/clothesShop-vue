// const fs = require('fs');
const express = require('express');
const app = express();
const products = require('./routes/products');
app.use(express.json());
app.use(products);

// app.get('/api/products', (req, res) => {
//   fs.readFile('api/db/products.json', 'utf-8', (err, data) => {
//     if (err) {
//       res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
//     } else {
//       res.send(data);
//     }
//   });
// });

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
