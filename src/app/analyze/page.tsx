// pages/analyze.tsx
import React from 'react';
import { GridBackgroundDemo } from "../pages/textbox/textbox";
import Navbar from '../pages/navbar/navbar';
import Footer from '../pages/footer/footer';

const AnalyzePage = () => {
  return (
    <div><section><Navbar/></section>
      
      <section><GridBackgroundDemo/></section>
      
      <Footer/>
    </div>
  );
};

export default AnalyzePage;
