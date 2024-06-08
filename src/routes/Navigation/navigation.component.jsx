import { Fragment } from "react";
import {Outlet, Link} from "react-router-dom";
import  './navigation.style.scss';

import {ReactComponent as Crownlogo} from '../../assets/crown.svg'

const Navigation = () => {
    return( 
      <Fragment>  
        <div className="navigation">
            <Link className="nav-logo-Container" to="/">
            <Crownlogo className="logo" />
            </Link>
          <div className="nav-link-container">
            <Link className="nav-link" to="/shop">SHOP</Link>
            <Link className="nav-link" to="/contact">CONTACT</Link>
            <Link className="nav-link" to="/SignIn">SIGN-IN</Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation