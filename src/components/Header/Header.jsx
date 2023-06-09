import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart,SetshowCart] = useState(false);
  const [showSearch,setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">Abhxyy.com</div>
          <div className="right">
            <TbSearch onClick={()=>setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className="cart-icon">
              <CgShoppingCart onClick={()=>SetshowCart(true)}/>
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart SetshowCart={SetshowCart}/> }
      {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Header;
