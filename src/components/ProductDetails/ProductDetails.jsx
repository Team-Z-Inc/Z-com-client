import React from 'react'
import styles from './productDetails.module.css'
import { MdStarRate } from "react-icons/md";
function ProductDetails() {
  return (
    <div id={styles.productDetailsMainWrapper}>
         {/* Top navigations */}
         <div className={styles.topNavigation}>
             <ul>
                <li><a href="/">Home /</a></li>
                <li><a href="">Shop /</a></li>
                <li><a href="/productDetails">Product Details</a></li>
             </ul>
         </div>

         {/* Product  details Section */}

         <div id={styles.productDetailsWrapper} className='container'>
             {/* Img Section is Start Here */}
             <div id={styles.imgSectionWrapper}>
                <div id={styles.largeImg}>
                  <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-14.webp" alt="" />
                </div>
                <div id={styles.imgNavigateWrap}>
                    <div id={styles.imgItem}>
                    <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-14.webp" alt="" />
                    </div>
                    
                    <div id={styles.imgItem}>
                    <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-slider-img-2.webp" alt="" />
                    </div>
                    
                   <div id={styles.imgItem}>
                   <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-slider-img-1.webp" alt="" />
                   </div>
                </div>
             </div>
             {/* img Section is End here */}
            
             <div id= {styles.productInfoWrapper}>
               <div>
                  <p>BOY'S FASHION</p>
                  <h2>Rainbow Sequin Profresonal Coat</h2>
                  <p className={styles.starIcon}><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /> </p>
                  <span ><p className={styles.reviews}>6 reviews</p></span>
                  <p className={styles.oldPrice}><strike>$9.99</strike> <b className={styles.newPrice}>$6.99</b> </p>
                  <p className={styles.shortDescription}>It is a long established fact that a reader will be distracted by the readable there content of a page.</p>
                  <hr className={styles.hr}/>
               </div>

               <div className={styles.availabillitySection}>
               <p>Availabillity : <span id={styles.availabillityInnerText}>132 Products Available</span></p>  
               </div>
                  
              </div>
         </div>
          {/* Product details Section is End here */}

         <div className='container'>
          <p ><b>Introduction</b> <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book </p>


          <div>
          <p className='py-3'><b>Features:</b> <br /> 
           
           <ul>
            <li>slim body with metal cover</li>
            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
            <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support</li>
           </ul>
          
          </p>
         </div>
         </div>
    </div>
  )
}
export default ProductDetails;