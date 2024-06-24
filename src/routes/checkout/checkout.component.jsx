import "./checkout.style.scss";

import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";
import CheckoutItem from "../../component/checkout-items/checkout-item.component";

const Checkout = () => {
  const { cartItems, CartTotal} =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
           <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">total: ${CartTotal}</span>
    </div>
  );
};
export default Checkout;
