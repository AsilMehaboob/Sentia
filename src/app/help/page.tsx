import React from 'react'
import { BackgroundBeams } from '../components/beam'
import Navbar from "../pages/navbar/navbar"
import { HelpBackgroundBeams } from '../pages/beam/beam';
import Footer from '../pages/footer/footer';

const Help = () => {
  return (
    <div className='bg-black' >
        <Navbar/>
        <BackgroundBeams/>
        <HelpBackgroundBeams/>
        <Footer/>
    </div>

  )
}

export default Help