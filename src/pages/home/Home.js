import React from 'react'
import Banner from '../../components/banner/Banner'
import Buy from '../../components/buy easy/Buy'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import LatestProducts from '../../components/latest products/LatestProducts'
import Services from '../../components/services/Services'


const Home = () => {
    return (
        <div>
            <Hero/>
            <Buy/>
            <Services/>
            <Banner/>
            <LatestProducts/>
            <Footer />
        </div>
    )
}

export default Home