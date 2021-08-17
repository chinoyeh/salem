import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Control from './Control'
import About from './About'
import Services from './Services'
import Prices from './Prices'
import Blog from './Blog'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
             <Navbar/>
            <Carousel/>
            <Control/>
            <About/>
            <Services/>
            <Prices/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home
