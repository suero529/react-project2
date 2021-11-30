import React from "react";

const Contact = () => {
  return (
    <div>
      <h3>Contact Information</h3>
      <p class="address">
        Citric Circuit
        <p>123 Avocardio St, </p>
        <p>NYC,</p>
        <p>US</p>
        <p>(123) 456-7890</p>
      </p>
      <h3>Follow Us</h3>
      <ul className="social-media">
        <li>
          <a href="http://www.twitter.com" class="footer a">
            Twitter
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com" class="footer a">
            Facebook
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com">Instagram</a>
        </li>
      </ul>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099"
        class="map-frame"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe> */}
    </div>
  );
};

export default Contact;
