import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/headphone-prod-2.webp";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-model">
      <div className="search-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-resultsContent">
        <div className="search-results">
          <div className="search-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="pro-details">
              <span className="name">Product Name</span>
              <span className="description">Product decription</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
