import React from 'react';
import '../About/about.css';

import coffeeimg from 'C:/Users/eHeuristic/first/src/Assets/Images/about_coffee.png';

const AboutUs = () => {
  return (
    // <section class="about-us">
    //   <div class="about">
    //     <img src={aboutimg} class="pic" />
    //     <div class="text">
    //       <h2>About Us</h2>
    //       <h5>Front-end Developer & <span>Designer</span></h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
    //       <div class="data">
    //         <a href="#" class="hire">Hire Me</a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="about_us" id="about">
      <div class="section_container">
        <div class="about_container">
          <div class="text_section">
            <h2 class="section_title">About Us</h2>
            <p>
              We at Coffee House, located in Berndorf, Germany, are one of the
              favorite hangouts for coffee and conversations. Our goal is to
              offer the best experience to our guests, ensuring an authentic
              coffee drinking experience in a warm, friendly, and relaxed
              environment. We aim to bring a sense of relaxation to the city
              with our cozy space, complete with comfortable couches to lounge
              in while you enjoy your coffee.
            </p>
          </div>
          <div class="image_section">
            <img src={coffeeimg} alt="coffee" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
