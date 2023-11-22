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
            <CartItem img ="  https://i.ibb.co/tpypd3B/cpu-5.png" title ="Feminine Wrap Blouse" prevPrice="$103.99" latestPrice="$6.99"/>


            <CartItem img ="https://i.ibb.co/5FPhGtq/headphone-8.png" title ="Trendy Bucket Hat" prevPrice="$18.99" latestPrice="$10.99"/>


            <CartItem img ="https://i.ibb.co/jvGv6qf/mobile-1.png" title ="Boho Maxi Dress" prevPrice="$20.99" latestPrice="$10.99"/>


            <CartItem img ="https://i.ibb.co/fvXHr2Y/blutooth-1.png" title ="Casual Denim Jacket" prevPrice="$20.99" latestPrice="$10.99"/>
            </div>

            {/* Bannner Sections */}
             
            
            {/* Flash Sale Sections */}



        </div>
        
    </div>
  )
}

export default BestSellWeek;