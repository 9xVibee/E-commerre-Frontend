import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ SetshowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span
            className="close-btn"
            onClick={() => {
              SetshowCart(false);
            }}
          >
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
            <BsCartX />
            <span>No Products in the cart</span>
            <button className="return-btn">RETURN TO SHOP</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="sub-total">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;1234</span>
            </div>
              <div className="btn">
                <button className="checkout-btn">Checkout</button>
              </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
