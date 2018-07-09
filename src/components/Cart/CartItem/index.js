import React from 'react';

class CartItem extends React.Component {
  render() {
    const {
      item,
      quantity,
      removeFromCart,
    } = this.props;
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
          onChange={this.onChange} />
      </td>
      <td data-th="Subtotal" className="text-center">
        {this.format(quantity * item.price)}
      </td>
      <td className="actions" data-th="">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeFromCart(item)}
        ><i className="fa fa-trash-o"></i></button>
      </td>
    </tr>
  }

  format = (num) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);

  onChange = (e) => {
    this.props.updateQuantity(this.props.item, e.currentTarget.value);
  }
}
export default CartItem;
