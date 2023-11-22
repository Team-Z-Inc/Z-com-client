import React, { useState } from 'react'
import styles from './productDetails.module.css'
import { MdStarRate, MdOutlineFavoriteBorder   } from "react-icons/md";
import { IoFlag, IoLogoPinterest, IoLogoTwitter } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaFacebookF, FaMinus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function ProductDetails() {


 const [images, setImg] = useState({
  img1: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
  img2: "https://i.ibb.co/WpkH1vq/headphone-6.png",
  img3: "https://i.ibb.co/yRYbDCc/headphone-7.png"

 });

 const [activeImg, setActiveImg] = useState(images.img1)

// Accordian Section State
const [isAccordionOpen, setAccordionOpen] = useState(false);

const toggleAccordion = () => {
  setAccordionOpen(!isAccordionOpen);
};

// Increment Section

const [quantity, setQuantity] = useState(0)


  return (
    <div id={styles.productDetailsMainWrapper}>
    
         {/* Top navigations */}
         <div className={styles.topNavigation}>
             <ul>
                <li><a href="/">Home /</a></li>
                <li><a href="">Shop /</a></li>
                <li><a href="/productDetails">Product Details</a></li>
             </ul>
         </div>

         {/* Product  details Section */}

         <div id={styles.productDetailsWrapper} className='container'>
             {/* Img Section is Start Here */}
             <div id={styles.imgSectionWrapper}>
            
                <div id={styles.largeImg}>
                <div className={styles.offerBar}><p><b>-50%</b></p></div>
                  <img src={activeImg} alt="" />
                </div>
                <div id={styles.imgNavigateWrap}>
                    <div id={styles.imgItem}>
                       <img src={images.img1} alt="" onClick={()=>{
                        setActiveImg(images.img1)
                       }}/>
                    </div>
                    
                    <div id={styles.imgItem}>
                       <img src={images.img2} alt="" onClick={()=>{
                        setActiveImg(images.img2)
                       }} />
                    </div>
                    
                   <div id={styles.imgItem}>
                     <img src={images.img3} alt="" onClick={
                      ()=>{
                        setActiveImg(images.img3)
                       }
                     } />
                   </div>
                </div>
             </div>
             {/* img Section is End here */}
            
             <div id= {styles.productInfoWrapper}>
               <div>
                  <p>BOY'S FASHION</p>
                  <h2>Rainbow Sequin Profresonal Coat</h2>
                  <p className={styles.starIcon}><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /> </p>
                  <span ><p className={styles.reviews}>6 reviews</p></span>
                  <p className={styles.oldPrice}><strike>$9.99</strike> <b className={styles.newPrice}>$6.99</b> </p>
                  <p className={styles.shortDescription}>It is a long established fact that a reader will be distracted by the readable there content of a page.</p>
                  <hr className={styles.hr}/>
               </div>

               <div className={styles.availabillitySection}>
                   <p>Availabillity : <span id={styles.availabillityInnerText}>132 Products Available</span></p>  
               </div>
                  
               {/* Accordian Sections is start here */}
                  <div id={styles.accordianWrapper}>
                    <p>Size:</p>
                     <div id={styles.toggoleBar} onClick={toggleAccordion}>
                        <p>Select Your Size</p> <MdOutlineKeyboardArrowDown className='mx-3 fs-4'/>
                     </div>
                      <div id={styles.accordianItemWrapper} className={isAccordionOpen ? styles.showAccordion : styles.hideAccordion}>
                         <div className={styles.accordianItem}>
                           <h6>Small</h6> <h6>3”W x 3”D x 5”H</h6>
                         </div>

                         <div className={styles.accordianItem}>
                           <h6>Medium</h6> <h6>3”W x 3”D x 5”H</h6>
                         </div>

                         <div className={styles.accordianItem}>
                           <h6>Large</h6> <h6>6”W x 3”D x 7”H</h6>
                         </div>

                         <div className={styles.accordianItem}>
                           <h6>Extra Large</h6> <h6>8”W x 4”D x 8”H</h6>
                         </div>

                         <div className={styles.accordianItem}>
                           <h6>2XL</h6> <h6>10”W x 5”D x 9”H</h6>
                         </div>
                      </div>
                  </div>


               {/* Accordian Section is end here */}

               {/* Add to Cart Button Section Is Start Here  */}
              <div id={styles.buttonSectionWrapper}>
                 <div id={styles.addIcon}>
                 <IoIosAdd onClick={()=>{setQuantity(quantity + 1)}} size='18px' color='black'/>  <span>  <p><b>{quantity}</b></p></span> <FaMinus onClick={()=>{setQuantity(quantity - 1)}}/>
                 </div> 
                  <div id={styles.favoriteIcon}>
                       <MdOutlineFavoriteBorder size={'20px'}/>
                  </div>

                  <div id={styles.addToCartButton}>
                     <span> <IoMdAdd id='animatedHover' /> <p className='d-inline mx-1'>Add To Cart</p></span>
                  </div>
              </div>

               {/*  Add to Cart Button Section Is End Here */}
                 <div>
                    
                    <p className='mt-5'>Tags : <span className={styles.tagSkuColor}> Beer, Foamer</span></p>
                    <p>SKU : <span className={styles.tagSkuColor}> KE-91039</span></p>
                    <hr className={styles.hr} />
                     <div>
                       <span>  <p className='text-danger'><IoFlag color='red' /> Report This item</p></span>
                    </div>

                    <div style={styles.shareIcon}>
                       <span>  <p className='mt-4'> Share This: <span><FaFacebookF className={styles.socialIconFb}/> <IoLogoPinterest className={styles.socialIconPrint} /> <IoLogoTwitter className={styles.socialIconTweet} /></span></p></span>
                    </div>
                    
                 </div>
                 <div>
                     
                 </div>
              </div>
         </div>
          {/* Product details Section is End here */}

         <div className='container' id={styles.productDes}>
          <p ><b>Introduction</b> <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book </p>


          <div>
          <p className='py-3'  id={styles.productDes} ><b>Features:</b> <br /> 
           
           <ul>
            <li>slim body with metal cover</li>
            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
            <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support</li>
           </ul>
          
          </p>
         </div>
         </div>
    </div>
  )
}
export default ProductDetails;


// WE need list of part