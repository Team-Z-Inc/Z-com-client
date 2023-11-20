
import styles from './Banner.module.css'
function Banner(props) {
  return (
    <div>
        <div id={styles.bannerWrapper} className='container overflow-hidden'>
            <div className={styles.leftImg} data-aos="slide-right">
            <img src={props.imgOne} alt="#" />
            </div>
            <div className={styles.rightImg} data-aos="slide-left">
            <img src={props.imgTwo} alt="#" />
            </div>
        </div>
    </div>
  )
}
export default Banner;