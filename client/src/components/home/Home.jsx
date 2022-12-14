import React, { useState } from "react";
import welcome from "../../images/welcome.jpg";
import Navigation from "./Navigation";
import "./home.css";

export default function Home() {
  
  return (
    <div>
      {/* --------------------------------------- Navigation ---------------------------------------- */}
      <Navigation />

      {/* --------------------------------------- Welcome section ---------------------------------------- */}
      <section className="welcome">
        <div className="welcome-text-img">
          <div className="welcome-text">
            <h4>Hi there,</h4>
            <p>Welocme to</p>
            <p>
              Discovercreditunion <sup>&copy;</sup>
            </p>
          </div> 
          <div className="welcome-img">
            <img src={welcome} alt="welcome" />
          </div>
        </div>
      </section>

      {/* --------------------------------------- Services section ---------------------------------------- */}
      <section className="services">
        <div className="services-head">
          <h1>How can we help?</h1>
        </div>
        <div className="services-body">
          <div className="service-items">
            <div className="service-item">
              <i class="fa-regular fa-credit-card"></i>
              <h4>Credit Cards</h4>
              <div className="vertical-line"></div>
            </div>
            <div className="service-item">
              <i class="fa-solid fa-building-columns"></i>
              <h4>Online Banking</h4>
              <div className="vertical-line"></div>
            </div>
            <div className="service-item">
              <i class="fa-regular fa-credit-card"></i>
              <h4>Personal loans</h4>
              <div className="vertical-line"></div>
            </div>
            <div className="service-item">
              <i class="fa-regular fa-credit-card"></i>
              <h4>Students Loan</h4>
              <div className="vertical-line"></div>
            </div>
            <div className="service-item">
              <i class="fa-regular fa-credit-card"></i>
              <h4>Home Loan</h4>
              <div className="vertical-line"></div>
            </div>
          </div>
        </div>
        <hr />
      </section>

    </div>
  );
}
