import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Banner from '../components/Banner/Banner'
import OurCategories from '../components/OurCategories/OurCategories'
import BrandProducts from '../components/BrandProducts/BrandProducts'
import NewArivals from '../components/NewArivals/NewArivals'
import FlashSale from '../components/FlashSale/FlashSale'
import TopSelling from '../components/TopSelling/TopSelling'
import BestSellWeek from '../components/BestSellWeek/BestSellWeek'
import SecondBannner from '../components/SecondBanner/SecondBannner'
import FlashSaleTwo from '../components/FlashSaleTwo/FlashSaleTwo'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>  
            <Carousel />
            <Banner imgOne="/img/banner1.png" imgTwo="/img/banner2.png"/>
            <OurCategories />
            <BrandProducts />
            <NewArivals />
            <FlashSale />
            <TopSelling />
            <BestSellWeek />
            <SecondBannner />
            <FlashSaleTwo />
            <Footer />
    </>
  )
}


export default Home;