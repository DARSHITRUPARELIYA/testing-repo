import React from 'react';
import '../Gallery/gallery.css';
import gallery_1 from 'C:/Users/eHeuristic/first/src/Assets/Images/gallery_1.jpg';
import gallery_2 from 'C:/Users/eHeuristic/first/src/Assets/Images/gallery_2.jpg';
import gallery_3 from 'C:/Users/eHeuristic/first/src/Assets/Images/gallery_3.jpg';
import gallery_4 from 'C:/Users/eHeuristic/first/src/Assets/Images/gallery_4.jpg';
import gallery_5 from 'C:/Users/eHeuristic/first/src/Assets/Images/gallery_5.jpg';
import gallery_6 from 'C:/Users/eHeuristic/first/src/Assets/Images/gallery_6.jpg';

const Gallery = () => {
    return (
        <section class="gallery" id="gallery">
        <h2 class="section_title">Gallery</h2>
        <div class="section_container">
          <div class="gallery_container">
            <div class="gallery_items">
              <img src={gallery_1} alt="Gallery Image" />
            </div>
            <div class="gallery_items">
              <img src={gallery_2} alt="Gallery Image" />
            </div>
            <div class="gallery_items">
              <img src={gallery_3} alt="Gallery Image" />
            </div>
            <div class="gallery_items">
              <img src={gallery_4} alt="Gallery Image" />
            </div>
            <div class="gallery_items">
              <img src={gallery_5} alt="Gallery Image" />
            </div>
            <div class="gallery_items">
              <img src={gallery_6} alt="Gallery Image" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;