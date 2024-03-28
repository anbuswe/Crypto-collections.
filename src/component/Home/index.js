import { Component } from "react";

import Popup from "reactjs-popup";

import { HiMiniBars4 } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";
import { FaRegComment, FaRegHeart} from "react-icons/fa";
import {
  HiArrowPathRoundedSquare,

} from "react-icons/hi2";
import { LuShare } from "react-icons/lu";


import LeftNavigation from "../LeftNavigation";
import PopulationChart from "../PopulationChart";
import PieCharts from "../PieChart";
import Assets from "../Assets";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-main-container">
        <div className="left-navbar-cont">
          <LeftNavigation />
        </div>
        <div className="right-cont">
          <div className="right-header-cont">
            <div className="top-header-hed-cont">
              <div className="mb-nav-bar-cont">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="mb-bars-btn">
                      <HiMiniBars4 />
                    </button>
                  }
                  position="left center"
                >
                  {(close) => {
                    const callToClose = () => {
                      close();
                    };
                    return <LeftNavigation callToClose={callToClose} />;
                  }}
                </Popup>
              </div>
              <div>
                <h1 className="home-cont-main-hed">
                  Hello, <span className="user-name">Brooklyn Simmons</span> 👋🏼
                </h1>
                <p className="wish-user">
                  Welcome to <span className="company-name">Spot Trading!</span>
                </p>
              </div>
            </div>
            <button className="home-main-btn" type="button">
              Start Trading
            </button>
          </div>
          <div className="analyses-cont">
            <div className="population-graph-cont">
              <div className="population-graph-hed">
                <h3>Market Overview</h3>
                <ul className="Country-list">
                  <li className="active-country">NBST</li>
                  <li className="country">EFT</li>
                  <li className="country">WPCT</li>
                  <li className="country">RET</li>
                </ul>
              </div>
              <hr className="line" />
              <PopulationChart />
              <hr className="line" />
              <div className="get-more-data-btn">
                <h2>Get All country`s Population</h2>
                <button className="fetch-data-btn"> Get</button>
              </div>
            </div>
            <div className="pie-charts-cont">
              <h3>Wallet Balance</h3>
              <hr className="line" />
              <PieCharts />
              <hr className="line" />
              <div className="get-more-data-btn">
                <h2>Get More info</h2>
                <button className="fetch-data-btn"> Click here</button>
              </div>
            </div>
            <div className="recent-posts-cont">
              <h3 className="recent-post-cont-hed">In recent posts</h3>
              <hr className="line" />
              <div className="post-card">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQGwNc23v7nwCw/company-logo_200_200/0/1674242049220/carboncell_logo?e=2147483647&v=beta&t=4KvdFwwikIB_6uMCPYAQxuYO8Q4K_cWhtsYj0BWPhZM"
                  alt="post"
                  className="post-logo"
                />
                <div className="post">
                  <div className="post-hed-cont">
                    <h4>Carbon Cell</h4>
                    <MdVerified />
                    <p className="mail-post">@carboncell . 2h</p>
                  </div>
                  
                <div>
                  <p className="post-pera">
                    Carbon Cell: Pioneering Finical Solutions for Greener
                    Future!
                  </p>
                  <p className="post-pera">
                    Read more:
                    <p className="url">
                      htps://carboncell.medium.com/introduing-carbon-cell-d8b9dc186c7...
                    </p>
                  </p>
                  <p className="post-pera">
                    In a world where decabrconization is paramount, Carbon Cell
                    is leading the charge to redefine{" "}
                    <span className="url">#CarbonMarkets.</span>
                    Follow this thread to learn how we`re making
                    sustainable...Show more
                  </p>
                  <div className="likes-cont">
                    <FaRegComment />
                    <p>19</p>
                    <HiArrowPathRoundedSquare />
                    <p>48</p>
                    <FaRegHeart />
                    <p>482</p>
                    <LuShare />
                    <p>36</p>
                  </div>
                  </div>
                  </div>
                  </div>
              <hr className="line" />
              <button className="fetch-data-btn">Follow us on x</button>
            </div>
          </div>
         <Assets/>
        </div>
      </div>
    );
  }
}

export default Home;
