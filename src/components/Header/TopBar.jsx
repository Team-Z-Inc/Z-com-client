import style from "./Topbar.module.css";
import { FaSearch, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="/img/logo.png" alt="logo" />
      </div>
      <div className={style.topmenu}>
        <div className={style.search}>
          <div className={style.SearchBar}>
            <input type="text" name="search" placeholder="Search" />
          </div>
          <span>
            <FaSearch className={style.icon} />
          </span>
        </div>
        <div className={style.wishlist}>
          <Link to="/wishlist">
            <span>
              <FaHeart />
              <sup>02</sup>
            </span>
            Wishlist
          </Link>
        </div>
        <div className={style.cartlist}>
          <Link to="/cartlist">
            <span>
              <FaCartShopping />
              <sup>04</sup>
            </span>
            Cartlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
