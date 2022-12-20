import React, { useState } from "react";
import welcome from "../../images/welcome.jpg";
import Navigation from "./Navigation";
import protection from "../../images/download.jfif";
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
            <p>Welcome to</p>
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

      {/* --------------------------------------- Services section ---------------------------------------- */}

      {/* --------------------------------------- D-Services section ---------------------------------------- */}
      <section className="sub-services">
        <div className="sub-items">
          <div className="sub-item">
            <div className="sub-bg"></div>
            <div className="sub-text">
              <h5>Online Privacy Protection for free</h5>
              <p>
                We help remove your personal data from ten popular people-search
                websites. Activate by mobile app for free.*
              </p>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className="sub-item">
            <div className="sub-bg"></div>
            <div className="sub-text">
              <h5>5% cash back when you shop</h5>
              <p>
                Earn 5% Cashback Bonus® at Amazon.com and Digital Wallets,
                now–December, on up to $1,500 in purchases, when you activate.
              </p>
              <a href="#">Check now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sub-services">
        <div className="sub-items">
          <div className="sub-item sub-item2 rad-1">
            <div className="sub-bg"></div>
            <div className="sub-text">
              <h5>Free benefits that just make sense</h5>
              <p>
                Card and explore your benefits. Security, financial insights,
                customer service and more.
              </p>
              <a href="#">Explore Benefits</a>
            </div>
          </div>
          <div className="sub-item sub-item2">
            <div className="sub-bg"></div>
            <div className="sub-text">
              <h5>Feeling safer at checkout</h5>
              <p>
                Tap and pay with a contactless Discover® credit card to help you
                avoid touching the card reader.
              </p>
              <a href="#">Update Card today</a>
            </div>
          </div>
          <div className="sub-item sub-item2 rad-2">
            <div className="sub-bg"></div>
            <div className="sub-text">
              <h5>Easy credit card preapproval check</h5>
              <p>
                Find out if you're preapproved for a Discover® card with no
                impact to your credit to check.
              </p>
              <a href="#">Check if you're pre approved</a>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------- !D-Services section ---------------------------------------- */}

      {/* --------------------------------------- D-Services section ---------------------------------------- */}
      {/* --------------------------------------- D-Services section ---------------------------------------- */}

    </div>
  );
}
