import React from 'react'
import styles from "./Footer.module.css"
import { BsCart3,BsArrowClockwise} from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrTrophy } from "react-icons/gr";
function Footer() {
  return (
    <div id={styles.footerWrapper}>
        {/* Top bar Section */}
        <div className='container'>
            <div id={styles.topBar} className='container'>
             <div className={styles.items}>
                  <div className={styles.icon}>
                    <BsCart3 />
                  </div>
                  <div className={styles.topText}>                 
                      <h5>Free Shipping</h5>
                      <p>When ordering over500$</p>
                  </div>
           </div>

          <div className={styles.items}>
             <div className={styles.icon}>
             <BsArrowClockwise />
             </div>
             <div className={styles.topText}>
               <h5>Free Return</h5>
               <p>Get Return within 30 days</p>
             </div>
          </div>
          <div className={styles.items}>
             <div className={styles.icon}>
             <RiSecurePaymentLine />
             </div>
             <div className={styles.topText}>
               <h5>Secure Payment</h5>
               <p>Secure Online Payment</p>
             </div>
          </div>
          <div className={styles.items}>
             <div className={styles.icon}>
             <GrTrophy />
             </div>
             <div className={styles.topText}>
               <h5>Best Quality</h5>
               <p>Original Product Guarenteed</p>
             </div>
          </div>
             </div>

  {/* Footer Items */}
  <div className={styles.footerItemWrapper}>
    <div className={styles.footerItems}>
    <div className={styles.footerItem}>
        <div>
          <img src="https://quomodothemes.website/html/shopus/assets/images/logos/footer-logo.webp" alt="" />
        </div>

       <div>
       <ul>
          <li><a href="">Track Order</a></li>
          <li><a href="">Delivery & Returns</a></li>
          <li><a href="">Warranty</a></li>
        </ul>
       </div>
    </div>

    <div className={styles.footerItem}>
        <div>
          <h4>About Us</h4>
        </div>

       <div>
       <ul>
          <li><a href="">Raves,s Stroy</a></li>
          <li><a href="">Work With Us</a></li>
          <li><a href="">Corporate News</a></li>
          <li><a href="">Investors</a></li>
        </ul>
       </div>
    </div>


    <div className={styles.footerItem}>
        <div>
            <h4>Useful Links</h4>
        </div>

       <div>
       <ul>
          <li><a href="">Secure Payment</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Archive Products</a></li>
        </ul>
       </div>
    </div>


    <div className={styles.footerItem}>
        <div>
          <h4>Contact Info</h4>
        </div>

       <div>
       <ul>
          <li><b>Adress:</b></li>
          <li>4517 Washington Ave. <br /> Manchester, Kentucky 39495</li>
          <li> <b>Phone:</b> +09494636485</li>
        </ul>
       </div>
    </div>
    </div>
  </div>

      
    </div>

          {/* Top bar Section is End here */}


{/* Overlay Sections */}

    <div id={styles.overlay}>
      
    </div>
         
    </div>
  )
}
export default Footer;
