import React from 'react'
import styles from './carosel.module.css'

function Carousel() {
  return (
<div id= {styles.carouselWrapper}>
<div>
  <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
    {/* <div className="carousel-indicators" id={styles.carouselIndicators}>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active"  aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    </div> */}
    <div className="carousel-inner ">
      <div className="carousel-item active " data-bs-interval="3000" id={styles.carouselImg}>
        <img src="/img/newcaro-1.png" className="d-block w-100 h-100" alt="..." />
      </div>
      <div className="carousel-item " data-bs-interval="3000" id={styles.carouselImg}>
        <img src="/img/newcaro-2.png" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item " data-bs-interval="3000" id={styles.carouselImg}>
        <img src="/img/newcaro-3.png" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item " data-bs-interval="3000" id={styles.carouselImg}>
        <img src="/img/caro-1.png" className="d-block w-100" alt="..." />
      </div>
    </div>
   </div>
  </div>
 </div>
  )

}

export default Carousel; 