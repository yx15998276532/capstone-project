import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
function Header() {
  const { cartItems } = useContext(Context);

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header>
      <Link to="/capstone-project">
        <h2>Pic Some</h2>
      </Link>
      <Link to="capstone-project/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
