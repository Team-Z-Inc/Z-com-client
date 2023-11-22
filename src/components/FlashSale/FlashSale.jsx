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
        <CartItem img ="https://i.ibb.co/n1YRvWJ/headphone-5.png" title ="Leather Dress Shoes" prevPrice="$22.99" latestPrice="$13.99"/>

            <CartItem img ="https://i.ibb.co/tpypd3B/cpu-5.png" title ="Trendy Bucket Hat" prevPrice="$39.99" latestPrice="$23.99"/>


            <CartItem img ="https://i.ibb.co/fMhtt2T/watch-9.png" title ="Stylish Statement Earrings" prevPrice="$39.99" latestPrice="$26.99"/>

            <CartItem img ="https://i.ibb.co/j4sDV3Q/watch-5.png" title ="Boho Maxi Dress" prevPrice="$29.99" latestPrice="$16.99"/>

        </div>
    </div>
  )
}

export default FlashSale;