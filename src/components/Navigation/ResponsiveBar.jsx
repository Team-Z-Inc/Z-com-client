import { IoIosArrowRoundForward } from "react-icons/io";
import style from "./ResponsiveBar.module.css";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ResponsiveBar = () => {
  return (
    <div className={style.responsiveBar}>
      <div className={style.loginBTN}>
        <a type="button">
          LOGIN <IoIosArrowRoundForward className={style.arrow} />
        </a>
      </div>
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
      <div className={style.menuitem}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user/deshboard"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            User Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default ResponsiveBar;
