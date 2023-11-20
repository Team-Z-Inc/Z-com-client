import React from 'react'
import styles from './BestSellWeek.module.css'
import CartItem from '../CartItem/CartItem';
import Banner from "../Banner/Banner";
function BestSellWeek() {
  return (
    <div id={styles.mainWrapper}>
        <div className='container'>
            {/* Top text section */}
            <div id={styles.topText}>
              <div>
                 <h4>
                    <b>Best Sell in this Week</b>
                 </h4>

                 <h6>
                     <b>View All</b>
                 </h6>
               </div>
             </div>

            {/* Best Four Item Sell in This Week */}

            <div id={styles.fourBestSellWrap}>
            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-5.webp" title ="Leather Dress Shoes" prevPrice="$22.99" latestPrice="$13.99"/>

            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-3.webp" title ="Trendy Bucket Hat" prevPrice="$39.99" latestPrice="$23.99"/>


            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-6.webp" title ="Stylish Statement Earrings" prevPrice="$39.99" latestPrice="$26.99"/>

            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-9.webp" title ="Boho Maxi Dress" prevPrice="$19.99" latestPrice="$16.99"/>
            </div>

            {/* Bannner Sections */}
             
            
            {/* Flash Sale Sections */}



        </div>
        
    </div>
  )
}

export default BestSellWeek;