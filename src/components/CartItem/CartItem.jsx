import { useNavigate } from "react-router-dom";
import styles from "./CartItem.module.css";
import { HiStar } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import { FiEye } from "react-icons/fi";
import { RiHeart3Line } from "react-icons/ri";
function CartItem(props) {
  const navigate = useNavigate();
  const handleItemClick = () => {
    // Simulate navigation by changing the window location
    // window.location.href = "/productDetails";
    navigate("/productDetails");
  };
  return (
    <div
      className={styles.cartItemWrapper}
      data-aos="zoom-in"
      onClick={handleItemClick}
    >
      <div className={styles.imgWrap}>
        <img src={props.img} alt="#" />
      </div>
      <div className={styles.textWrap}>
        <p>Categories</p>
        <h6>
          <b>{props.title}</b>
        </h6>
        <p className={styles.starIcon}>
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
        </p>
        <p className={styles.quantity}>(7 Review)</p> <br />
        <div id={styles.priceWrapper}>
          <p id={styles.prevPrice}>{props.prevPrice}</p>
          <p id={styles.newPrice}>
            <b>{props.latestPrice}</b>
          </p>
        </div>
      </div>
      {/* <div id={styles.buttonWrap}>

            <button><b>Add To Cart</b></button>
        </div> */}

      {/* Hover Icon Section */}
      <div id={styles.hoverIconWrap}>
        <div className={styles.iconOne}>
          <GrCart />
        </div>
        <div className={styles.iconTwo}>
          <FiEye />
        </div>
        <div className={styles.iconThree}>
          <RiHeart3Line />
        </div>
      </div>
      {/* Hover Icon Section End */}
    </div>
  );
}
export default CartItem;
