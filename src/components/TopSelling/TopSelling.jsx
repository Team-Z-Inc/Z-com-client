import React from 'react'
import styles from "./Topselling.module.css"
import TopsellingItem from '../TopSellingItem/TopsellingItem'
function TopSelling() {
  return (
    <div id={styles.topSellingWrapper}>
       {/* Top text section */}
       <div id={styles.topText} className='container'>
              <div>
                 <h4>
                    <b>Top Selling Prodcuts</b>
                 </h4>

                 <h6>
                     <b>View All</b>
                 </h6>
               </div>
             </div>

             {/* Cart item Section is Start Here */}
      <div  className='container' id={styles.itemWrapper}>
        
        <TopsellingItem img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-5.webp" title="Leather Dress Shoes" prevPrice="$20.99" mainPrice="$13.99" />

        <TopsellingItem img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-3.webp" title="Wool Peacoat" prevPrice="$15.99" mainPrice="$8.99" />

        <TopsellingItem img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-6.webp" title="Stylish Earrings" prevPrice="$17.99" mainPrice="$9.99" />

        <TopsellingItem img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-7.webp" title="Leather Dress Shoes" prevPrice="$20.99" mainPrice="$8.99" />

        <TopsellingItem img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-8.webp" title="Trendy Bucket Hat" prevPrice="$13.99" mainPrice="$7.99" />

        <TopsellingItem img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/product-img/product-img-10.webp" title="Rainbow Dress" prevPrice="$12.99" mainPrice="$6.99" />
        </div>

        {/* Best Seller Service */}
        
          <div className='container'>
          {/* Top text */}
                <div id={styles.bestSellerWrapper}>
                    <div className={styles.topText}>
                      <h2><b>Best Seller</b></h2>
                      <h6><b>View all</b></h6>
                    </div>
                      {/*Brand Name*/}
                      <div id={styles.brandNameWrapper}>
                         <div className={styles.brandItem}>
                           <div>
                           <img src="../../../public/img/best-seller 1.png" alt="#" />
                           </div>
                           <h5>Jansjina</h5>
                         </div>

                         <div className={styles.brandItem}>
                           <div><img src="../../../public/img/best-seller 2.png" alt="#" /></div>
                           <h5>Graoishta</h5>
                         </div>

                         <div className={styles.brandItem}>
                            <div>
                            <img src="../../../public/img/best-seller 3.png" alt="#" />
                            </div>
                           <h5>Toaksiua</h5>
                         </div>

                         <div className={styles.brandItem}>
                          <div>
                          <img src="../../../public/img/best-seller 4.png" alt="#" />
                          </div>
                           <h5>Rouaop</h5>
                         </div>

                         <div className={styles.brandItem}>
                          <div>
                          <img src="../../../public/img/best-seller 5.png" alt="#" />
                          </div>
                           <h5>Goloasx</h5>
                         </div>

                         <div className={styles.brandItem}>
                           <div>
                           <img src="../../../public/img/best-seller 6.png" alt="#" />
                           </div>
                           <h5>Lkasafiak</h5>
                         </div>
                      </div>
                </div> 
          </div>      
    </div>
  )
}

export default TopSelling;