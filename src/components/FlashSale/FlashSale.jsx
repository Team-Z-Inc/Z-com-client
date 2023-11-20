import React from 'react'
import Styles from './FlashSale.module.css'
import CartItem from '../CartItem/CartItem'

function FlashSale() {
  return (
    <div id={Styles.flashWrapper}>
       <div id={Styles.topText} className='container'>
         <div>
            <h3><b>Flash Sale</b></h3>
         </div>
         <div>
           <h5><b>View All</b></h5>
         </div>
       </div>
       {/* there is card components */}
      <div id={Styles.productWrapper} className='container overflow-hidden'>
        <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-5.webp" title ="Leather Dress Shoes" prevPrice="$22.99" latestPrice="$13.99"/>

            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-3.webp" title ="Trendy Bucket Hat" prevPrice="$39.99" latestPrice="$23.99"/>


            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-6.webp" title ="Stylish Statement Earrings" prevPrice="$39.99" latestPrice="$26.99"/>

            <CartItem img ="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-4.webp" title ="Boho Maxi Dress" prevPrice="$29.99" latestPrice="$16.99"/>

        </div>
    </div>
  )
}

export default FlashSale;