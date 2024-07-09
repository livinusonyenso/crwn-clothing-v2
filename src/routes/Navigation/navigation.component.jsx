import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.jsx";

import { ReactComponent as Crownlogo } from "../../assets/crown.svg";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { Usercontext } from "../../contex/users.context";
import { CartContext } from "../../contex/cart.context";
import { SignOutUser } from "../../utlis/firebase/firebase.utils";

import { NavigationContainer,LogoContainer, NaviLinks, Navlink } from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(Usercontext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crownlogo className="logo" />
        </LogoContainer>
        <NaviLinks>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <Navlink as='span' onClick={SignOutUser}>
              SIGN-OUT
            </Navlink>
          ) : (
            <Navlink to="/auth">
              SIGN-IN
            </Navlink>
          )}
          <CartIcon />
        </NaviLinks> 

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
