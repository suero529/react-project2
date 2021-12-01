import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="contact-heading" style={{ textAlign: "center" }}>
        Contact Information
      </h1>
      <div class="address-box">
        <p
          className="address"
          style={{ textAlign: "center", fontSize: 22, color: "cornflowerblue" }}
        >
          Citric Circuit
        </p>
        <p
          className="address"
          style={{ textAlign: "center", fontSize: 22, color: "cornflowerblue" }}
        >
          123 Avocardio St,{" "}
        </p>
        <p
          className="address"
          style={{ textAlign: "center", fontSize: 22, color: "cornflowerblue" }}
        >
          NYC, US
        </p>
        <p
          className="address"
          style={{ textAlign: "center", fontSize: 22, color: "cornflowerblue" }}
        >
          (123) 456-7890
        </p>
      </div>
      <div className="follow">
        <h3 className="follow-us" style={{ textAlign: "center", fontSize: 25 }}>
          Follow Us!
        </h3>
        <ul className="social-media">
          <li>
            <img
              style={{ width: 50 }}
              src="https://cdn-icons-png.flaticon.com/512/355/355974.png"
              alt="twitter"
            ></img>
          </li>
          <li>
            <img
              style={{ width: 50 }}
              src="https://cdn-icons-png.flaticon.com/512/355/355975.png"
              alt="ig"
            ></img>
          </li>
          <li>
            <img
              style={{ width: 50 }}
              src="https://cdn-icons-png.flaticon.com/512/355/355969.png"
              alt="fb"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
