import React from 'react'
import styles from "./TopsellingItem.module.css"
import { MdStarRate } from "react-icons/md";
function TopsellingItem(props) {
  return (
    <div id={styles.topWrapper} data-aos='slide-right'>
        <div className={styles.leftItem}>
            <img src={props.img} alt="" />
        </div>
        <div className={styles.rightItem}>
            <div className={styles.textWrap}>
                    <p className={styles.starIcon}> <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></p>
                    <h5><b>{props.title} </b></h5>
                    <p><b><strike>{props.prevPrice}</strike> </b> <b><span className={styles.mainPrice}>{props.mainPrice}</span></b></p>
            </div>
        </div>

    </div>
  )
}

export default TopsellingItem