import React from 'react'
import Banner from "../Banner/Banner";
import styles from "./SecondBanner.module.css"
function SecondBannner() {
  return (
    <div id={styles.wrapper}>
        <Banner imgOne="/img/banner3.png" imgTwo="/img/banner4.png" />
    </div>
  )
}

export default SecondBannner