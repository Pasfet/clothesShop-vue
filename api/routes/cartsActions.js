const amount = cart => {
  cart.amount = cart.products.reduce((acc, cur) => (acc += cur.quantity * cur.price), 0);
};

const countGoods = cart => {
  cart.countGoods = cart.products.reduce((acc, cur) => (acc += cur.quantity), 0);
};

const add = (cart, req) => {
  cart.products.push(req.body);
  amount(cart);
  countGoods(cart);
  return JSON.stringify(cart, null, 4);
};

const addOneProduct = (cart, req) => {
  const find = cart.products.find(el => el.id === +req.params.id);
  if (find) {
    find.quantity++;
    amount(cart);
    countGoods(cart);
  }
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  addOneProduct
};
