import React from "react";
import { useCart } from "./CartContext";

function DishesList() {
  const { dishes, addToCart, cartCount, cartValue } = useCart();

  return (
    <div>
      <h3>Dishes List</h3>

      <p>Cart count: {cartCount}</p>
      <p>Total value: ${cartValue.toFixed(2)}</p>

      {dishes.map((dish) => (
        <div
          key={dish.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h4>{dish.name}</h4>
          <p>Category: {dish.category}</p>
          <p>Price: ${dish.price}</p>
          <p>{dish.description}</p>

          <button onClick={() => addToCart(dish)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default DishesList;
