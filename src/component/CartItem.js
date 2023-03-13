import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";
function CartItems({ item }) {
  const { removeFormCart } = useContext(Context);
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFormCart(item.id)}
        ref={ref}
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} alt="" width="130px" height="130px" />
      <p>$9.88</p>
    </div>
  );
}
export default CartItems;

CartItems.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
