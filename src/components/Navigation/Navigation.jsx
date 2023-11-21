import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GiAmpleDress } from "react-icons/gi";
import style from "./Navigation.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div
          className={style.allcatelog}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <HiOutlineMenuAlt1 className={style.icon} />
          All Categories
          {toggle && (
            <div className={style.dropdown}>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
              <li className={style.dropMenu}>
                <a>
                  <GiAmpleDress className={style.icon} />
                  <span>asasdlas</span>
                </a>
                <IoIosArrowForward />
              </li>
            </div>
          )}
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
        <div className={style.vandorbtn}>
          <button type="button">
            Became Vendor <IoIosArrowRoundForward className={style.arrow} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
