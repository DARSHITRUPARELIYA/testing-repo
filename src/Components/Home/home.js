import React from 'react';
import '../Home/home.css';
import coffeeimg from '../../Assets/Images/cofffee_image.png';

const HomePage = () => {
    return (
      <section className="hero_section">
      <div className="section_container">
        <div className="hero_container">
          <div className="text_section">
            <h2>Fuel Your Passion</h2>
            <h3>Discover the Magic in Every Cup</h3>
            <p>
              Welcome to our coffee paradise, where every bean tells a story and
              every cup sparks.
            </p>
            <div className="hero_section_button">
              <button className="button">Order Online</button>
              <button className="button">Book A Table</button>
            </div>
          </div>
          <div className="image_section">
            <img src={coffeeimg} alt="Coffee" />
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default HomePage;