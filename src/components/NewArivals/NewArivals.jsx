import React from 'react'
import Styles from './NewArivals.module.css'
import CartItem from '../CartItem/CartItem';
function NewArivals() {
  return (
    <div id={Styles.NewArivalsWrapper}>
       <div id={Styles.topText} className='container'>
         <div>
            <h3><b>NEW ARRIVALS</b></h3>
         </div>
         <div>
           <h5><b>View All</b></h5>
         </div>
       </div>
      <div id={Styles.productWrapper} className='container overflow-hidden'>
        <CartItem img ="https://i.ibb.co/WVdTgR8/headphone-1.png" title ="Rainbow Sequin Dress" prevPrice="$12.99" latestPrice="$123.50"/>

            <CartItem img ="  https://i.ibb.co/tpypd3B/cpu-5.png" title ="Feminine Wrap Blouse" prevPrice="$103.99" latestPrice="$6.99"/>


            <CartItem img ="https://i.ibb.co/5FPhGtq/headphone-8.png" title ="Trendy Bucket Hat" prevPrice="$18.99" latestPrice="$10.99"/>


            <CartItem img ="https://i.ibb.co/jvGv6qf/mobile-1.png" title ="Boho Maxi Dress" prevPrice="$20.99" latestPrice="$10.99"/>


            <CartItem img ="https://i.ibb.co/3WMPkkf/mobile-5.png" title ="Casual Denim Jacket" prevPrice="$20.99" latestPrice="$10.99"/>

            <CartItem img ="https://i.ibb.co/kxGMcrw/ipad-1.png" title ="Rainbow Sequin Dress" prevPrice="$20.99" latestPrice="$9.99"/>


            <CartItem img ="https://i.ibb.co/wYZr4k6/cpu-1.png" title ="Rainbow Sequin Dress" prevPrice="$19.99" latestPrice="$18.99"/>


            <CartItem img ="https://i.ibb.co/n1YRvWJ/headphone-5.png" title ="Rainbow Sequin Dress" prevPrice="$25.99" latestPrice="$13.99"/>
          
        </div>
        

    </div>
  )
}

export default NewArivals;