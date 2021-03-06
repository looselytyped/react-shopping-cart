import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from "./InventoryItem";

const Inventory = props =>
  <table id="inventory" className="table table-hover table-condensed">
    <thead>
      <tr>
        <th>Product</th>
        <th>Add to Cart</th>
      </tr>
    </thead>
    <tbody>
      {
        props.inventory.map(item => {
          return (
            <InventoryItem
              key={item.id}
              item={item}
              addToCart={props.addToCart}
            />
          );
        })
      }
    </tbody>
  </table>

Inventory.propTypes = {
  inventory: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Inventory;
