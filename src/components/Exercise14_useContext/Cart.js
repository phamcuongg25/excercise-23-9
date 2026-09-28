import React from "react";
import { useCart } from "./CartContext";

function Cart() {
  const {
    cartItems,
    cartCount,
    cartValue,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <div>
      <h3>Cart</h3>

      <p>Total items: {cartCount}</p>
      <p>Total value: ${cartValue.toFixed(2)}</p>

      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
