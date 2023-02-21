import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return(<CartContext.Provider value={{Cart,addToCart}}  >
    {props.children}
  </CartContext.Provider>)

};

export const useCartContext = () => useContext(CartContext)

export default CartProvider;