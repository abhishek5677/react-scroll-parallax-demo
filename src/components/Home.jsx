import React from "react";
import {  ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {
    return(
        <ParallaxBanner
      layers={[
        {
          image: 'your-image-url-here',
          amount: 0.3, // Adjust the amount of parallax effect
        },
      ]}
      className="banner"
    >
      <div className="animated-content">
        {/* Content and animations go here */}
      </div>
    </ParallaxBanner>
    )
    
}

export default Home;
