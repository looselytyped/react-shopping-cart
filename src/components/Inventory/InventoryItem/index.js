import React from "react";
import PropTypes from 'prop-types';

const InventoryItem = ({ item, addToCart }) =>
  <tr>
    <td>
      <div className="row">
        <div className="col-sm-10">
          <h4 className="nomargin">{item.name}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </td>
    <td className="actions" data-th="">
      {
        item.addedToCart
          ? <button
            className="btn btn-success btn-sm"
            disabled>
            <i className="fa fa-check-square-o"></i>
          </button>
          : <button
            className="btn btn-success btn-sm"
            onClick={() => addToCart(item)}>
            <i className="fa fa-plus-square-o"></i>
          </button>
      }
    </td>
  </tr>

InventoryItem.defaultProps = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default InventoryItem;
