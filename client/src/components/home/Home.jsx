import React, { useState } from "react";
import welcome from "../../images/welcome.jpg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import Footer from "./Footer";
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
          </div>
          <br />
          <br />
          <div className="finance-body">
            <div className="left">
              <div className="left-container"></div>
              <a href="#">What credit card do I qualify for</a>
            </div>
            <div className="right">
              <div className="right-item">
                <div className="item-img"></div>
                <Link className="item-link" to="/">
                  5 Financial Resolutions That Never Work—and What to Do Instead
                </Link>
              </div>
              <div className="right-item">
                <div className="item-img"></div>
                <Link className="item-link" to="/">
                  9 Good Financial Habits to Eliminate Personal Debt
                </Link>
              </div>
              <div className="right-item">
                <div className="item-img"></div>
                <Link className="item-link" to="/">
                  7 Reasons to Consider Student Loan Consolidation
                </Link>
              </div>
              <div className="right-item">
                <div className="item-img last"></div>
                <Link className="item-link" to="/">
                  How Home Equity Can Help Pay Off Debt
                </Link>
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
          <div className="savings-item item-1"></div>
          <div className="savings-item item-2">
            <div className="">
              <h1>We can help you get serious about saving</h1>
              <p>
                Tell us a bit about your goals and our savings calculator will
                show you how to get there faster.
              </p>
              <button>Calculate Savings</button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------- !Savings section ---------------------------------------- */}

      {/* --------------------------------------- financial needs section ---------------------------------------- */}

      <section className="financial-needs">
        <div className="needs">
          <div className="needs-head">
            <h1>We've got your financial needs covered</h1>
          </div>
          <div className="needs-body">
            <div className="needs-items">
              <div className="needs-item">
                <h4>Credit Card</h4>
                <p>
                  Discover credit cards are built to give you great rewards and
                  the service you deserve, from our flagship cash back credit
                  cards to our flexible travel credit card. Compare credit cards
                  to find which offer is right for you. Use our interest
                  calculator to estimate your monthly payment.
                </p>
              </div>

              <div className="needs-item">
                <h4>Build a Credit History</h4>
                <p>
                  Explore our Secured credit card to help build your credit
                  history. If you’re a student, start building a credit history
                  in college and enjoy cash back with Discover Student credit
                  cards. Compare credit cards to find which is right for you.
                </p>
              </div>

              <div className="needs-item">
                <h4>Cashback Checking</h4>
                <p>
                  Other banks charge for checking but we reward you. Check out
                  our online checking account with no monthly fees or balance
                  requirements. Open a checking account today.
                </p>
              </div>

              <div className="needs-item">
                <h4>Savings Accounts</h4>
                <p>
                  Open a high-interest, no-monthly fee online savings account.
                  Learn more about online savings or see how a savings account
                  calculator can help you reach your financial goals.
                </p>
              </div>

              <div className="needs-item">
                <h4>Certificates of Deposit</h4>
                <p>
                  Learn more about how CDs grow savings safely, or open a CD
                  account today and lock in a great rate with terms ranging from
                  3 months to 10 years.
                </p>
              </div>

              <div className="needs-item">
                <h4>Balance Transfers</h4>
                <p>
                  Making a balance transfer is a great way to save money on
                  higher interest debt. See all the ways we can help you achieve
                  your debt consolidation goals.
                </p>
              </div>

              <div className="needs-item">
                <h4>Personal Loans</h4>
                <p>
                  A personal loan from Discover of up to $35k can help you
                  consolidate higher-interest debt or afford a large purchase.
                  $0 origination fees, a fixed monthly payment and no prepayment
                  penalty. Estimate your payments today with our personal loan
                  calculator.
                </p>
              </div>

              <div className="needs-item">
                <h4>Home Loans</h4>
                <p>
                  With loan amounts from $35,000 to $300,000, and no cash
                  required at closing, a home equity loan or a mortgage
                  refinance from Discover is a simple way to consolidate debt,
                  make home improvements, cover college costs, and pay for other
                  major expenses. Use our rate and payment calculator to
                  estimate your monthly payment.
                </p>
              </div>

              <div className="needs-item">
                <h4>Student Loans</h4>
                <p>
                  Private student loans from Discover can cover up to 100% of
                  school-certified college and graduate school costs. Zero fees,
                  choice of fixed or variable interest rates and cash rewards
                  for good grades. Learn more about how to pay for college.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dummy-paragraph">
        <p>
          The Contactless Symbol is a trademark owned by and used with
          permission of EMVCo, LLC
        </p>
      </div>

      <footer className="footer">
        <div className="footer-items">
          <div className="item">
            <h4>Products and services</h4>
            <ul>
              <li>
                <Link to="/">Credit Cards</Link>
              </li>
              <li>
                <Link to="/">Online Banking</Link>
              </li>
              <li>
                <Link to="/">Personal Loans</Link>
              </li>
              <li>
                <Link to="/">Student Loans</Link>
              </li>
              <li>
                <Link to="/">Home Equity Loans</Link>
              </li>
              <li>
                <Link to="/">Mortgage Refinance</Link>
              </li>
              <li>
                <Link to="/">Diners Club International</Link>
              </li>
              <li>
                <Link to="/">PULSE</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h4>About Our Company</h4>
            <ul>
              <li>
                <Link to="/">About Discover</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Cooperate Responsibility</Link>
              </li>
              <li>
                <Link to="/">Inverstors Relation</Link>
              </li>
              <li>
                <Link to="/">Newsroom</Link>
              </li>
              <li>
                <Link to="/">Accept Discover</Link>
              </li>
              <li>
                <Link to="/">Diversity and Inclusion</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h4>Resources and Legal</h4>
            <ul>
              <li>
                <Link to="/">Card Smarts</Link>
              </li>
              <li>
                <Link to="/">Modern Money</Link>
              </li>
              <li>
                <Link to="/">Personal Loans Resources</Link>
              </li>
              <li>
                <Link to="/">Home Loan Resources</Link>
              </li>
              <li>
                <Link to="/">College Planning</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Security</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Cardmember Agreement</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Mobile App</Link>
              </li>
              <li>
                <Link to="/">Refer a friend</Link>
              </li>
              <li>
                <Link to="/">ATM Locator</Link>
              </li>
              <li>
                <Link to="/">Site Map</Link>
              </li>
              <li>
                <Link to="/">Language Services</Link>
              </li>
              <li>
                <Link to="/">Accessibility</Link>
              </li>
              <li>
                <Link to="/">AdChoices</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* --------------------------------------- !financial needs section ---------------------------------------- */}
    </div>
  );
}
