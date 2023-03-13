import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../component/CartItem";
function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [btnValue, setBtnValue] = useState("place order");

  const totalCost = 9.88 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartElem = cartItems.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  function placeOrder() {
    setBtnValue("Ordering.....");
    setTimeout(() => {
      console.log("place order!");
      setBtnValue("place order");
      emptyCart();
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElem}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{btnValue}</button>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </main>
  );
}
export default Cart;
