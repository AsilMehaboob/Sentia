import React from 'react';

import HelpBackgroundBeams from '../pages/beam/beam';
import Footer from '../pages/footer/footer';
import Navbar from '../pages/navbar/navbar';

const Help = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <div className=''>
        <div className=' justify-center z-50'>
          <Navbar />
        </div>
      </div>
      <div>
        <HelpBackgroundBeams />
      </div>
      <Footer />
    </div>
  );
}

export default Help;
