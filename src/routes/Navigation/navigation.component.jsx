import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";

import { ReactComponent as Crownlogo } from "../../assets/crown.svg";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { Usercontext } from "../../contex/users.context";
import { CartContext } from "../../contex/cart.context";
import { SignOutUser } from "../../utlis/firebase/firebase.utils";


const Navigation = () => {

  const { currentUser } = useContext(Usercontext);

  const {isCartOpen} =useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-logo-Container" to="/">
          <Crownlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>SIGN-OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
              <CartIcon />
        </div>

{ isCartOpen  &&   <CartDropdown />}   
   </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
