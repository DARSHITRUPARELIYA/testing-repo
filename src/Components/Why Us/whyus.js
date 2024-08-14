import React from 'react';
import '../Why Us/whyus.css';
import delicious from 'C:/Users/eHeuristic/first/src/Assets/Images/delicious.png';
import pleasant from 'C:/Users/eHeuristic/first/src/Assets/Images/pleasant.png';
import hospitality from 'C:/Users/eHeuristic/first/src/Assets/Images/hospitality.png';

const WhyUs = () => {
    return (
        <section class="why_us" id="why">
        <h2 class="section_title">Why Us?</h2>
        <div class="section_container">
          <div class="why_container">
            <div class="why_items">
              <img src={delicious} alt="Delicious" />
              <div class="why_us_text">
                <h3>Delicious Food</h3>
                <p>
                  With a lavish spread of finger licking food, we serve to satisfy
                  your palate and take you on a culinary treat.
                </p>
              </div>
            </div>
            <div class="why_items">
              <img src={pleasant} alt="Pleasant" />
              <div class="why_us_text">
                <h3>Pleasant Ambience</h3>
                <p>
                  We seek to serve all our guests with the perfect dining
                  experience. We provide perfect ambbience to cherish special
                  moments.
                </p>
              </div>
            </div>
            <div class="why_items">
              <img src={hospitality} alt="Hospitality" />
              <div class="why_us_text">
                <h3>Hospitality</h3>
                <p>
                  Our staff members are happy to help. We go the extra mile to
                  make you happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyUs;