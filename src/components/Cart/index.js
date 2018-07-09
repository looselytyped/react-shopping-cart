import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) =>
  cartItems.length > 0
    ? <table id="cart" className="table table-hover table-condensed">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th className="text-center">Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          cartItems.map(({ item, quantity }) =>
            <CartItem
              key={item.id}
              item={item}
              quantity={quantity}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          )
        }
      </tbody>
    </table>
    : <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Empty Cart</h4>
      <p>Please add some items to your cart from our inventory above</p>
    </div>


CartItem.propTypes = {
  cartItems: PropTypes.array,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default Cart;
