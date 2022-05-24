const {createSelector} = require('@reduxjs/toolkit');

const cartSelector = state => state.cart;
const productSelector = state => state.product;

export const cartTotalSelector = createSelector([cartSelector], cart =>
  cart.reduce((total, current) => (total += current.quantity), 0),
);

export const cartTotalPriceSelector = createSelector([cartSelector], cart =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0,
  ),
);
