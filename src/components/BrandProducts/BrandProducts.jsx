import React from 'react'
import styles from './BrandProducts.module.css'
function BrandProducts() {
   return (
      <div className='container' id={styles.brandWrapper}>
         <div id={styles.brandtextWrapper}>
            <div className={styles.topText}>
               <div className="leftText">
                  <h3><b>Brand of Prodcuts</b></h3>
               </div>
               <div className="rightText">
                  <b>View All</b>
               </div>
            </div>
         </div>
         {/* Brand Product */}
         <div className='container' id={styles.brandProduct}>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-1.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-2.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-3.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-4.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-5.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-6.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-7.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-8.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-9.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-10.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-11.webp" alt="" />
            </div>
            <div className={styles.items}>
               <img src="https://quomodothemes.website/html/shopus/assets/images/homepage-one/brand-img-12.webp" alt="" />
            </div>
         </div>

      </div>
   )
}
export default BrandProducts;