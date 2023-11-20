import React from 'react'
import styles from './OurCategories.module.css'
import CategoriesItems from '../CategoriesItem/CategoriesItems';

function OurCategories() {
  return (
    <div id={styles.container} className='container'>
        <div className={styles.topText}>
          <div>
            <h3><b>Our Categories</b></h3>
          </div>
          <div>
             <b> View All</b>
          </div>
        </div>

        {/* CategoryItems */}
        <div className={styles.cateGoriesWrapper}>
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/dresses.webp" text="Dresses" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/bags.webp" text="Leather Bags" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/sweaters.webp" text="Sweaters" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/shoes.webp" text="Boats" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/gift.webp" text="Gift for Him" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/sneakers.webp" text="Sneakers" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/watch.webp" text="Watch" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/ring.webp" text="Gold Rings" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/cap.webp" text="Cap" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/glass.webp" text="Sunglass" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/baby.webp" text="Baby Shop" />
           <CategoriesItems img="https://quomodothemes.website/html/shopus/assets/images/homepage-one/category-img/bags.webp" text="Leather Bags" />
        </div>

    </div>
  )
}

export default OurCategories;