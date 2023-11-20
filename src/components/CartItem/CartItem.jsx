import React from 'react'
import styles from './CartItem.module.css'
import { MdStarRate } from "react-icons/md";
function CartItem( props) {
  const handleItemClick = () => {
    // Simulate navigation by changing the window location
    window.location.href = '/productDetails';
  };
  return (
    <div className={styles.cartItemWrapper} data-aos="zoom-in" onClick={handleItemClick}>
        <div className={styles.imgWrap}>
            <img src={props.img} alt="#" />
        </div>
        <div className={styles.textWrap}>
             <p className={styles.starIcon}><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></p>
             <h5><b>{props.title}</b></h5>
             
             <p><strike><b>{props.prevPrice}</b></strike> <span id={styles.price}><b>{props.latestPrice}</b></span></p>
        </div>
        <div id={styles.buttonWrap}>
            <button><b>Add To Cart</b></button>
        </div>
    </div>
  )
}
export default CartItem;