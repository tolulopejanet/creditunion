import React, { useState } from "react";
import welcome from "../../images/welcome.jpg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
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

      {/* --------------------------------------- members card section ---------------------------------------- */}

      <section className="members">
        <div className="member-star">
          <div className="member">
            <h1>What cardmembers are saying</h1>
          </div>
          <div className="star">
            <p className="stars">★★★★★</p>
            <p className="review">4.7 Average of 33139 Reviews</p>
            <button>Read Discover it reviews</button>
          </div>
        </div>
        <div className="color"></div>
      </section>

      {/* --------------------------------------- members card section ---------------------------------------- */}

      {/* --------------------------------------- finances section ---------------------------------------- */}

      <section className="finances">
        <div className="finance">
          <div className="finance-header">
            <h1>Making Your Finances Work Harder For You</h1>
          </div><br /><br />
          <div className="finance-body">
            <div className="left">
              <div className="left-container"></div>
              <a href="#">What credit card do I qualify for</a>
            </div>
            <div className="right">
              <div className="right-item">
                <div className="item-img"></div>
                <Link className="item-link" to="/">5 Financial Resolutions That Never Work—and What to Do Instead</Link>
              </div>
              <div className="right-item">
                <div className="item-img"></div>
                <Link className="item-link" to="/">9 Good Financial Habits to Eliminate Personal Debt</Link>
              </div>
              <div className="right-item">
                <div className="item-img"></div>
                <Link className="item-link" to="/">7 Reasons to Consider Student Loan Consolidation</Link>
              </div>
              <div className="right-item">
                <div className="item-img last"></div>
                <Link className="item-link" to="/">How Home Equity Can Help Pay Off Debt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="more-articles">
        <div className="mores">
          <button>Read more articles</button>
        </div>
      </div>
      {/* --------------------------------------- !finances section ---------------------------------------- */}


      {/* --------------------------------------- Savings section ---------------------------------------- */}

      <section className="savings">
        <div className="savings-items">
          <div className="savings-item"></div>
          <div className="savings-item">
            <h1>We can help you get serious about saving</h1>
            <p>Tell us a bit about your goals and our savings calculator will show you how to get there faster.</p>
            <button>Calculate Savings</button>
          </div>
        </div>
      </section>

      {/* --------------------------------------- !Savings section ---------------------------------------- */}
    </div>
  );
}
