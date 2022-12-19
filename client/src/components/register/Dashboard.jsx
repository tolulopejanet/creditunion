import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../home/Navigation";
import { Space, Spin } from "antd";
import logo from "../../images/logo.png";
// import "antd/dist/antd.min.css";
import { Tabs } from "antd";
import axios from "axios";

const { TabPane } = Tabs;

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api").then((data) => {
      if (data) {
        setUser(data.data);
      }
      console.log(data.data);
    });
  });

  return (
    <>
      <nav className="navigation">
        <div className="nav-content">
          <div className="banner-content">
            <div className="nav-items">
              <div className="item">
                <Link to="/">logo</Link>
              </div>
              <div className="item">
                Welcome, {user && user.name ? user.name : "Robert"}
              </div>
              <div className="item">
                <Link to="/">logo</Link>
              </div>
            </div>
            <br />
            <br />
            <div className="account-statement">
              <p>Estimated Account Details</p>
              <h3>#2, 500, 000.89</h3>
              <p>Account Balance</p>
            </div>
            <div className="current-balance">
              <p>Current Balance</p>
              <h3>#300, 000.89</h3>
            </div>
          </div>
        </div>
      </nav>
      <div className="container content-container">
        <Tabs tabPosition={window.innerWidth <= 425 ? "top" : "top"}>
          <TabPane tab="Activity" key="1">
            <div className="activity">
              <div className="act-item">
                <div>
                  <p>Payment with QR code</p>
                  <span>05/12/21</span>
                </div>
                <div className="">
                  <span>#1, 500, 000.89</span>
                </div>
              </div>
              <div className="act-item">
                <div>
                  <p>Payment with QR code</p>
                  <span>03/12/20</span>
                </div>
                <div className="">
                  <span>#1, 000, 000.00</span>
                </div>
              </div>
              <div className="act-item"></div>
            </div>
          </TabPane>
          <TabPane tab="Scheduled" key="2"></TabPane>
        </Tabs>
      </div>
      <br />
      <br />
      <div className="container content-container2 second">
        <div className="activity">
          <div className="act-item">
            <div>
              <p>Payment with QR code</p>
            </div>
          </div>
          <div className="act-item">
            <div>
              <p>Payment with QR code</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
