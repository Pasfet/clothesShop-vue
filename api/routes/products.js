const fs = require('fs');
const { Router } = require('express');
const router = Router();

router.get('/products', (req, res) => {
  fs.readFile('api/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
