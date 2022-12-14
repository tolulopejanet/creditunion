import React, { useState } from "react";
// import "antd/dist/antd.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Modal } from "antd";

export default function Navigation() {
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleCancel = () => setPreviewVisible(false);

  return (
    <nav className="nav">
      <div
        class="hide"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"  
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i>&nbsp;Menu
      </div>

      <div
        class="hide offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="nav-items">
        <ul className="show">
          <li>
            All products&nbsp;<i class="fa-solid fa-angle-down"></i>
          </li>
          <li>
            <i class="fa-regular fa-circle-question"></i>&nbsp;Help and
            Resources
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass">&nbsp;</i>Search
          </li>
        </ul>
        <a
          onClick={(e) => {
            e.preventDefault();
            setPreviewVisible(true);
          }}
          className="login"
        >
          Log in
        </a>
      </div>

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <div className="form-container">
          <form action="/api/login" method="POST">
            <div className="signup-logo">
              <div className="logo">
                <img src={logo} alt="" className="logo-img" />
              </div>
            </div>
            <div className="form-content">
              <h3>
                Secure an account Log in &nbsp;
                <i className="fa-solid fa-padlock"></i>
              </h3>
              <input type="text" name="userID" placeholder="User ID" />
              <input type="password" name="password" placeholder="Password" />
              <select name="card" id="">
                <option value="card">Credit Card</option>
              </select>
              <input className="checkbox" type="checkbox" name="" id="" />{" "}
              <span>Remember User ID</span>
              <br />
              <button>Log In</button>
            </div>
          </form>
          <br />
          <a href="/">Forgot user ID or Password?</a>
          <br />
          <a href="/">Activate Credit Card</a>
          <br />
          <Link to="/api/register">Register your account</Link>
        </div>
      </Modal>
    </nav>
  );
}
