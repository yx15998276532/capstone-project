import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite, addToCart, cartItems, removeFormCart } =
    useContext(Context);

  const styles = img.isFavorited
    ? "ri-heart-fill  favorite"
    : "ri-heart-line  favorite";

  const heartIcon = hovered && (
    <i className={styles} onClick={() => toggleFavorite(img.id)}></i>
  );

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFormCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} imageContainer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="" className="image-grid" />
      {heartIcon}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool,
  }),
};
export default Image;
