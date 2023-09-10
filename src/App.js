import React from 'react';

import { useParallax, Parallax } from "react-scroll-parallax";
const App = () => {
  const scaleCParallax = useParallax({
    scaleX: [0, 3, "easeInQuad"],
  });
  const parallaxRotateY = useParallax({
    rotateY: [0, 360],
  });
  const parallaxRotateY2 = useParallax({
    rotateY: [0, 360],
  });
  const parallaxRotateY3 = useParallax({
    rotateY: [0, 360],
  });
  const parallaxEasing = useParallax({
    easing: "easeOutQuad",
    translateX: [-340, 100],
  });
  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  });

  return (
    <div>
      <section className="bg-container">
        <img
          ref={parallaxRotateY.ref}
          src="https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <div className="absolute-text">
          <h1 ref={parallaxEasing.ref}>MEMBERSHIP WEBSITE</h1>
          <h2 ref={parallaxEasingLeft.ref}>For members only non profitable</h2>
        </div>
      </section>
      <br />
      
      <section className="card-container" ref={scaleCParallax.ref}>
        <div className="card">
          <img src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </section>

      <br />
      <br />
      <section className="card-container">
        <div className="card" ref={parallaxRotateY2.ref}>
          <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800" />
        </div>
        <div ref={parallaxRotateY3.ref} className="card">
          <img src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>

      </section>
      <br />

      <section className="subscribe">
        <h1>Subscribe to our news letter</h1>
        <br />
        <input type="email" placeholder="youremail@gmail.com" />
        <button>Subscribe</button>
      </section>
      
    </div>
  );
};
export default App;
