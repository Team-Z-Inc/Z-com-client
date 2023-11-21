import React from 'react'
import styles from './FlashSaleTwo.module.css'
import CartItem from '../CartItem/CartItem';
function FlashSaleTwo() {
  return (
 <div className='container'>
  {/* Top text section */}
  <div id={styles.topText}>
         <div>
            <h3><b>NEW ARRIVALS</b></h3>
         </div>
         <div>
           <h5><b>View All</b></h5>
         </div>
       </div>

     <div id={styles.flashSaleTwo}>
                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-5.webp" title ="Leather Dress Shoes" prevPrice="$22.99" latestPrice="$13.99"/>

                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-2.webp" title ="Feminine Wrap Blouse" prevPrice="$9.99" latestPrice="$6.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-3.webp" title ="Trendy Bucket Hat" prevPrice="$18.99" latestPrice="$10.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-4.webp" title ="Boho Maxi Dress" prevPrice="$20.99" latestPrice="$10.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-5.webp" title ="Casual Denim Jacket" prevPrice="$20.99" latestPrice="$10.99"/>

                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-6.webp" title ="Rainbow Sequin Dress" prevPrice="$20.99" latestPrice="$9.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-7.webp" title ="Rainbow Sequin Dress" prevPrice="$19.99" latestPrice="$18.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-1.webp" title ="Rainbow Sequin Dress" prevPrice="$25.99" latestPrice="$13.99"/>
                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-5.webp" title ="Leather Dress Shoes" prevPrice="$22.99" latestPrice="$13.99"/>

                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-2.webp" title ="Feminine Wrap Blouse" prevPrice="$9.99" latestPrice="$6.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-3.webp" title ="Trendy Bucket Hat" prevPrice="$18.99" latestPrice="$10.99"/>


                <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-4.webp" title ="Boho Maxi Dress" prevPrice="$20.99" latestPrice="$10.99"/>

           </div>
    </div>
  )
}

export default FlashSaleTwo;