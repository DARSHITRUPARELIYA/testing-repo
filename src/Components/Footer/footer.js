import React from "react";
import "../Footer/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import coffeelogo from "C:/Users/eHeuristic/first/src/Assets/Images/coffee_logo.png";

const Footer = () => {
  return (
    <footer>
      <div class="section_container">
        <div class="footer_section">
          <div class="footer_logo">
            <a href="index.html">
              <img src={coffeelogo} alt="Coffee Logo" />
              <h2>Coffee</h2>
            </a>
          </div>
          <div class="useful_links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="contact_us">
            <h3>Contact</h3>
            <ul>
              <li>
                <i><h3><FaSearchLocation /></h3></i>
                <span>Berndorf, Germany</span>
              </li>
              <li>
                <i><FaPhoneAlt/></i> <span>+01 92728239</span>
              </li>
              <li>
                <i><FaClock /></i>
                <span>Mon-Sun : 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          <div class="follow_us">
            <h3>Follow</h3>
            <div class="picons">
              <i>
                <h3>
                  <FaFacebook />
                </h3>
              </i>
              <i>
                <h3>
                  <FaTwitter />
                </h3>
              </i>
              <i>
                <h3>
                  <FaInstagram />
                </h3>
              </i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
