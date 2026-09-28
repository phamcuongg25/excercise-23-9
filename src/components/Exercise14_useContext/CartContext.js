import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description: "A quintessential ConFusion experience, is it a vada or a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake.",
  },
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems((currentItems) => [...currentItems, dish]);
  };

  const removeFromCart = (index) => {
    setCartItems((currentItems) =>
      currentItems.filter((_, i) => i !== index)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  const cartValue = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <CartContext.Provider
      value={{
        dishes,
        cartItems,
        cartCount,
        cartValue,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
