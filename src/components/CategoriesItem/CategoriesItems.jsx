import React from 'react'
import styles from './CategoriesItem.module.css'
function CategoriesItems(props) {
  return (
    <div className={styles.itemWrapper} data-aos="slide-right">
        <div className={styles.imgSection}>
            <img src={props.img} alt="" />
        </div>
        <div className={styles.textSection}>
            <h4>{props.text}</h4>
        </div>
    </div>
  )
}

export default CategoriesItems;