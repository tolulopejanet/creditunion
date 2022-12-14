import React, { useState } from "react";
import Navigation from "../home/Navigation";
import { Modal } from "antd";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleCancel = () => setPreviewVisible(false);
  return (
    <>
      <Navigation />
      <div className="register-container">
        <div className="">
          <h1>Register to access your account online</h1>

          <div className="accounts">
            <div className="account-item">
              <h3>Credit Cards</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setPreviewVisible(true);
                }}
                to="/api/register/"
              >
                Register Now
              </Link>
            </div>
            <div className="account-item">
              <h3>Banking</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setPreviewVisible(true);
                }}
                to="/api/register/"
              >
                Register Now
              </Link>
            </div>
            <div className="account-item">
              <h3>Student Loans</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setPreviewVisible(true);
                }}
                to="/api/register/"
              >
                Register Now
              </Link>
            </div>
            <div className="account-item">
              <h3>Personal Loans</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setPreviewVisible(true);
                }}
                to="/api/register/"
              >
                Register Now
              </Link>
            </div>
            <div className="account-item">
              <h3>Home Loans</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setPreviewVisible(true);
                }}
                to="/api/register/"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <div className="form-container">
          <form action="/api/register" method="POST">
            <div className="signup-logo">
              <div className="logo">
                <img src={logo} alt="" className="logo-img" />
              </div>
            </div>
            <div className="form-content">
              <h3>
                Let's Register You &nbsp;
                <i className="fa-solid fa-padlock"></i>
              </h3>
              <input type="text" name="userID" placeholder="User ID" />
              <input type="password" name="password" placeholder="Password" />
              <input type="number" name="cardNumber" id=""  placeholder="Card Number"/>
              <select name="card" id="">
                <option value="card">Credit Card</option>
                <option value="card">Personal Loans</option>
                <option value="card">Student Loans</option>
                <option value="card">Home Loans</option>
              </select>
              <input className="checkbox" type="checkbox" name="" id="" />{" "}
              <span>Remember User ID</span>
              <br />
              <button>Register</button>
            </div>
          </form>
          <br />
          <a href="/">Forgot user ID or Password?</a>
          <br />
          <a href="/">Activate Credit Card</a>
          <br />
          <a href="/">Register your account</a>
        </div>
      </Modal>
    </>
  );
}
