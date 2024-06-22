import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems,productToAdd) => {
    // find if item contains productToAdd
const existingCartItem = cartItems.find((cartItem) => cartItem.id  === productToAdd.id);
    // if found increament quantity 
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
     { ...cartItem, quantity: cartItem.quantity + 1} 
     : cartItem

        )
    }

    //rteurn new array with a modified cartItem/new cartItem
    return [...cartItems , { ...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
  cartCount : 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]) ;
    const [cartCount, setCartCount] = useState([0]) ;

    useEffect(() => {
        const newCount = cartItems.reduce((total , cartItem) => total + cartItem.quantity,0)
        setCartCount(newCount);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
   

    const value = { isCartOpen, setIsCartOpen,addItemToCart,cartItems,cartCount };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};


