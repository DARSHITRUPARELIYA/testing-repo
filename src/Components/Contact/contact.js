import React from 'react';
import '../Contact/contact.css';

const Contact = () => {
    return (
        <section class="contact" id="contact">
      <h2 class="section_title">Contact Us</h2>
      <div class="section_container">
        <div class="contact_container">
          <div class="contact_form">
            <form action="#">
              <div class="field">
                <label for="Name">Full Name</label>
                <input type="text" id="Name" placeholder="Your Name" required />
              </div>
              <div class="field">
                <label for="email">Your Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="field">
                <label for="number">Your Number</label>
                <input
                  type="number"
                  id="number"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div class="field">
                <label for="textarea">Textarea</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button class="button" id="submit">Submit</button>
            </form>
          </div>
          <div class="contact_text">
            <div class="contact_items">
              <i class="bx bx-current-location"></i>
              <div class="contact_details">
                <h3>Our Location</h3>
                <p>Berndorf, Germany</p>
              </div>
            </div>
            <div class="contact_items">
              <i class="bx bxs-envelope"></i>
              <div class="contact_details">
                <h3>General Enquries</h3>
                <p>coffeeshop@xyz.com</p>
              </div>
            </div>
            <div class="contact_items">
              <i class="bx bxs-phone-call"></i>
              <div class="contact_details">
                <h3>Call Us</h3>
                <p>+01 92728239</p>
              </div>
            </div>
            <div class="contact_items">
              <i class="bx bxs-time-five"></i>
              <div class="contact_details">
                <h3>Our Timing</h3>
                <p>Mon-Sun : 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default Contact;