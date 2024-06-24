import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if item contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found increament quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //rteurn new array with a modified cartItem/new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


const removeCartItem = (cartItems, cartItemToReomve) => {
    //find cartItem to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToReomve.id
      );

    //check if quantity ia equal to 1,if it is,reomve cartItem from the cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter( cartItem => cartItem.id !== cartItemToReomve.id);
    }

    //return cartItem with a matching cartitem with reduced quantity

    return cartItems.map((cartItem) =>
    cartItem.id === cartItemToReomve.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

}

const clearCartItem = (cartItems,cartItemToClear ) => cartItems.filter( cartItem => cartItem.id !== cartItemToClear .id);


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  CartTotal:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([0]);
  const [CartTotal, setCartTotal] = useState([0]);

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCount);
  }, [cartItems]);
   
  useEffect(() => {
    const newCartTotal  = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToReomve) => {
    setCartItems(removeCartItem(cartItems, cartItemToReomve));
  };
  
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };


  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    CartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
