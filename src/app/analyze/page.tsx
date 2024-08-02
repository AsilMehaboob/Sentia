// pages/analyze.tsx
import React from 'react';
import GridBackgroundDemo from '../pages/textbox/textbox';
import Footer from '../pages/footer/footer';
import Navbar from '../pages/navbar/navbar';

const AnalyzePage = () => {
  return (
    <div>
      <Navbar />
      <section>
        <GridBackgroundDemo />
      </section>
      <Footer />
    </div>
  );
};

export default AnalyzePage;
