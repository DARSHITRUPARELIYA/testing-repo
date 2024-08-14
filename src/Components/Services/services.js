import React from 'react';
import '../Services/services.css';
import hot_beverages from 'C:/Users/eHeuristic/first/src/Assets/Images/cold_beverages.png';
import cold_beverages from 'C:/Users/eHeuristic/first/src/Assets/Images/hot_beverages.png';
import refreshment from 'C:/Users/eHeuristic/first/src/Assets/Images/refreshment.png';
import special_combos from 'C:/Users/eHeuristic/first/src/Assets/Images/special_combos.png';
import burger_frenchFries from 'C:/Users/eHeuristic/first/src/Assets/Images/burger_frenchFries.png';
import dessert from 'C:/Users/eHeuristic/first/src/Assets/Images/dessert.png';

const Services = () => {
    return (
        <section class="services" id="service">
        <h2 class="section_title">Our Services</h2>
        <div class="section_container">
          <div class="service_container">
            <div class="services_items">
              <img src={hot_beverages} alt="Hot Beverages" />
              <div class="services_text">
                <h3>Hot Beverages</h3>
                <p>
                  Wide range of Steaming hot coffees to make you fresh and light.
                </p>
              </div>
            </div>
            <div class="services_items">
              <img src={cold_beverages} alt="Cold Beverages" />
              <div class="services_text">
                <h3>Cold Beverages</h3>
                <p>
                  Creamy and frothy cold coffee to make you feel cool from inside.
                </p>
              </div>
            </div>
            <div class="services_items">
              <img src={refreshment} alt="Refreshment" />
              <div class="services_text">
                <h3>Refreshment</h3>
                <p>Fruit and icy refreshing drink to make you feel good.</p>
              </div>
            </div>
            <div class="services_items">
              <img src={special_combos} alt="Special Combos" />
              <div class="services_text">
                <h3>Special Combos</h3>
                <p>
                  Now it's really easy to chose your favourite eating and drinking
                  combinations.
                </p>
              </div>
            </div>
            <div class="services_items">
              <img
                src={burger_frenchFries}
                alt="Burger & French Fries"
              />
              <div class="services_text">
                <h3>Burger & French Fries</h3>
                <p>Yummy! Quick bites to satisfy your small size hunger.</p>
              </div>
            </div>
            <div class="services_items">
              <img src={dessert} alt="Desserts" />
              <div class="services_text">
                <h3>Desserts</h3>
                <p>
                  This for sure would satiate your palate and take you on a
                  culinary treat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    );
  };
  
  export default Services;