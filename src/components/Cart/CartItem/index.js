import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, quantity, removeFromCart, updateQuantity, }) => {
  const format = (num) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);

  const onChange = (e) => {
    updateQuantity(item, e.currentTarget.value);
  }

  return <tr>
    <td data-th="Product">
      <div className="row">
        <div className="col-sm-10">
          <h4 className="nomargin">{item.name}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </td>
    <td data-th="Price">${item.price}</td>
    <td data-th="Quantity">
      <input
        type="number"
        className="form-control text-center"
        value={quantity}
        onChange={onChange} />
    </td>
    <td data-th="Subtotal" className="text-center">
      {format(quantity * item.price)}
    </td>
    <td className="actions" data-th="">
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeFromCart(item)}
      ><i className="fa fa-trash-o"></i></button>
    </td>
  </tr>
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
