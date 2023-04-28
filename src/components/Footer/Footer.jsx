import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* about */}
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            excepturi totam explicabo officiis distinctio beatae adipisci,
            aperiam quisquam reiciendis quasi.
          </div>
        </div>

        {/* contact */}
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
             SambhajiNagar Maharasthra
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 7777 777 777</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@fuckstore.com</div>
          </div>
        </div>
        {/* categoires */}
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        {/* pages */}
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            FUCKSTORE 2023 CREATED BY KAKAROT , PREMIUM E-COMMERCE SOLUTIONS
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
