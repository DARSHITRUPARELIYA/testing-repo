import React from 'react';
import '../Nav/nav.css';
import coffeelogo from "C:/Users/eHeuristic/first/src/Assets/Images/coffee_logo.png";

const Nav = () => {
    return (
        <header>
        <nav>
          <div class="nav_logo">
            <a href="#">
              <img src={coffeelogo} alt="Coffee Logo" />
              <h2>Coffee</h2>
            </a>
          </div>
          <input type="checkbox" id="click" />
          <label for="click">
            <i class="menu_btn bx bx-menu"></i>
            <i class="close_btn bx bx-x"></i>
          </label>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Nav;