import React from 'react';
import Inventory from '../Inventory';
import Cart from '../Cart';
import Checkout from '../Checkout';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          id: 1,
          name: 'Apple - 1 lb',
          description: 'An apple a day keeps the doctor away',
          price: 2,
          addedToCart: false,
        },
        {
          id: 2,
          name: 'Banana - 1 lb',
          description: 'B-B-B-anana!',
          price: 1.25,
          addedToCart: false,
        },
        {
          id: 3,
          name: 'Grapes - 1 lb',
          description: 'Green goodness',
          price: 0.50,
          addedToCart: false,
        }
      ],
      cartItems: [
      ],
    }
  }
  render() {
    return (
      <div className="container">
        <h2>Inventory</h2>
        <Inventory
          inventory={this.state.inventory}
          addToCart={this.addToCart}
        />
        <h2>Cart</h2>
        <Cart
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
          updateQuantity={this.updateQuantity}
        />
        <Checkout
          total={this.calculateTotal()} />
      </div>
    );
  }

  addToCart = item => {
    const {
      inventory,
      cartItems,
    } = this.state;

    const updatedInventory = inventory.map(el => {
      return el.id === item.id ? ({ ...item, addedToCart: true, }) : el
    });

    this.setState(
      {
        inventory: updatedInventory,
        cartItems: [
          ...cartItems,
          {
            item,
            quantity: 1,
          }
        ],
      }
    );
  }

  removeFromCart = item => {
    const {
      inventory,
      cartItems,
    } = this.state;

    const updatedInventory = inventory.map(el => {
      return el.id === item.id ? ({ ...el, addedToCart: false, }) : el
    });

    this.setState(
      {
        inventory: updatedInventory,
        cartItems: cartItems.filter(i => i.item.id !== item.id),
      }
    );
  }

  updateQuantity = (item, quantity) => {
    const {
      cartItems,
    } = this.state;

    const updatedCart = cartItems.map(el => {
      return el.item.id === item.id ? ({ ...el, quantity, }) : el
    });

    this.setState(
      {
        cartItems: updatedCart,
      }
    );
  }

  calculateTotal = () =>
    this.state.cartItems.reduce((acc, { item, quantity }) => {
      return acc + (item.price * quantity)
    }, 0);
}
