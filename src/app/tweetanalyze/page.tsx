import React from 'react';
import TweetAnalyzer from '../components/tweetanalyzer'; // Adjust the path as needed
import Navbar from '../pages/navbar/navbar';
import Footer from '../pages/footer/footer';

const TweetAnalyse = () => {
  return (
    <div><div>
        
        <Navbar/>
    </div>
    <div>
        <TweetAnalyzer />
    </div>
      <Footer/>
    </div>
  );
};

export default TweetAnalyse;
