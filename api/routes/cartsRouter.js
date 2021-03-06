const fs = require('fs');
const { Router } = require('express');
const router = Router();
const handlerCarts = require('./handlerCarts');

router.get('/carts', (req, res) => {
  fs.readFile('api/db/userCarts.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.json(data);
    }
  });
});

router.post('/carts', (req, res) => {
  handlerCarts(req, res, 'add', 'api/db/userCarts.json');
});

router.patch('/carts', (req, res) => {
  handlerCarts(req, res, 'change', 'api/db/userCarts.json');
});

router.delete('/carts/:id', (req, res) => {
  handlerCarts(req, res, 'delete', 'api/db/userCarts.json');
});

router.post('/carts/clear', (req, res) => {
  handlerCarts(req, res, 'clearCarts', 'api/db/userCarts.json');
});

module.exports = router;
