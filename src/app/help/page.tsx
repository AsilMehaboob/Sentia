import React from 'react';

import  HelpBackgroundBeams  from '../pages/beam/beam';
import Footer from '../pages/footer/footer';
import Navbar from '../components/navbar';

const Help = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow'>
 
        <HelpBackgroundBeams />
      </div>
      <Footer />
    </div>
  );
}

export default Help;
