import "./SingleProduct.scss";
import prod from "../../assets/products/headphone-prod-5.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
  FaLinkedin,
} from "react-icons/fa";

const SingleProduct = () => {
  return (
    <div className="single-product-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Boat 360HZ</span>
            <span className="des">Best in all segment!</span>
            <span className="price">price</span>
            <div className="cart-buttons">
              <div className="quantity-btn">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="addtocart-btn">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-items">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
