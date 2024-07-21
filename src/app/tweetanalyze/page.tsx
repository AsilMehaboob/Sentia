import React from 'react';
import TweetAnalyzer from '../components/tweetanalyzer'; // Adjust the path as needed
import Navbar from '../pages/navbar/navbar';

const TweetAnalyse = () => {
  return (
    <div><div>
        
        <Navbar/>
    </div>
    <section>
        <TweetAnalyzer />
    </section>
      
    </div>
  );
};

export default TweetAnalyse;
