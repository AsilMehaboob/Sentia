import React from 'react'
import { BackgroundBeams } from '../components/beam'
import Navbar from "../pages/navbar/navbar"
import { HelpBackgroundBeams } from '../pages/beam/beam';

const Help = () => {
  return (
    <div >
        <Navbar/>
        <BackgroundBeams/>
        <HelpBackgroundBeams/>
    </div>
  )
}

export default Help