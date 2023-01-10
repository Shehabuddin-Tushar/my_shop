import React from 'react'
import About from '../Components/About/About'
import Slider from '../Components/Banner/Slider'
import Blogs from '../Components/Blogs/Blogs'
import Clients from '../Components/Clients/Clients'
import Featureproduct from '../Components/Featuresproduct/Featureproduct'
import Footer from '../Components/Footer/Footer'

import Navbar from '../Components/Navbar/Navbar'
import Newsletter from '../Components/Newsletter/Newsletter'
import Reviews from '../Components/Reviews/Reviews'


function Home() {
 
  return (
    <div >
      <Navbar />
      <Slider />
      <Featureproduct />
      <About/>
      <Blogs/>
      <Reviews />
      <Newsletter />
      <Clients />
      <Footer/>
    </div>
  )
}

export default Home