const amount = cart => {
  cart.amount = cart.products.reduce(
    (acc, cur) => (acc += cur.quantity * cur.price),
    0
  );
};

const countGoods = cart => {
  cart.countGoods = cart.products.reduce(
    (acc, cur) => (acc += cur.quantity),
    0
  );
};

const add = (cart, req) => {
  cart.products.push(req.body);
  amount(cart);
  countGoods(cart);
  return JSON.stringify(cart, null, 4);
};

const removeProduct = (cart, req) => {
  const find = cart.products.find(el => el.id === +req.params.id);
  if (find) {
    cart.products.splice(cart.products.indexOf(find), 1);
    amount(cart);
    countGoods(cart);
  }
  return JSON.stringify(cart, null, 4);
};

const clearCarts = (cart, req) => {
  cart.products = [];
  amount(cart);
  countGoods(cart);
  return JSON.stringify(cart, null, 4);
};

const actionsGood = (cart, req) => {
  const { change, type } = req.body;

  const find = cart.products.find(el => el.id === +change);

  console.log(find);
  if (find) {
    switch (type) {
      case 'add':
        find.quantity++;
        break;
      case 'minus':
        find.quantity--;
      default:
        break;
    }
  }
  amount(cart);
  countGoods(cart);
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  removeProduct,
  clearCarts,
  actionsGood
};
