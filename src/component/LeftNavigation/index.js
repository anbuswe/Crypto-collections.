import { Component } from "react";

import { HiMiniBars4 } from "react-icons/hi2";
import { FaSearch, FaAngleDoubleLeft } from "react-icons/fa";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import Navbar from "../Navbar";

import "./index.css";

const navBarOptions = [
  {
    id: "home",
    option: "Home",
  },
  {
    id: "organization",
    option: "Organization",
  },
  {
    id: "assets",
    option: "Assets",
  },
  {
    id: "trade",
    option: "Trade",
  },
  {
    id: "history",
    option: "History",
  },
  {
    id: "wallet",
    option: "Wallet",
  },
];

class SideNavigationBar extends Component {
  state = {
    activeNavOption: navBarOptions[0].id,
  };

  updateActiveId = (id) => {
    this.setState({
      activeNavOption: id,
    });
  };

  closeBar = () => {
    const { callToClose } = this.props;
    callToClose();
  };


  render() {
    const { activeNavOption } = this.state;
    return (
      <div className="nav-side-bar-cont">
        <div className="pc-nav-side-details-cont">
          <div>
            <div className="top-logo-cont">
              <img
                src="https://carboncell.io/assets/img/logo2.png"
                alt="carbon cell logo"
              />
              <button type="button" className="pc-bars-btn">
                <HiMiniBars4 />
              </button>
              <button
                onClick={this.closeBar}
                type="button"
                className="mb-bars-btn"
              >
                <FaAngleDoubleLeft />
              </button>
            </div>
            <div className="search-input-cont">
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            </div>
            <div >
            <ul>
              
              {navBarOptions.map((options) => (
                <Navbar
                  options={options}
                  key={options.id}
                  updateActiveId={this.updateActiveId}
                  activeNavOption={activeNavOption}
                />
              ))}
        
          </ul>
          <ul>
            
              <li className="notifi-option">
                <div className="notifi-option-icons-cont">
                  <IoNotificationsOutline />
                  <p className="bottom-options">Notifications</p>
                </div>
                <span className="unread-notifications">12</span>
              </li>
              <li className="bottom-option-item">
                <MdOutlineContactSupport />
                <p className="bottom-options">Support</p>
              </li>
              <li className="bottom-option-item">
                <IoSettingsOutline />
                <p className="bottom-options">Settings</p>
              </li>
            </ul>
            
            <div className="profile-cont">
              <div className="profile">
                <img
                  src="https://i.ibb.co/319vYRr/In-Shot-20220115-142818153.jpg"
                  alt="profile"
                  className="profile-img"
                />
                <div>
                  <h4 className="profile-user-name">Anbu.p</h4>
                  <p className="user-email">arasuanbu586@gmail.com</p>
                </div>
              </div>
              <button className="profile-option-btn">
              <BsThreeDotsVertical />
              </button>
            </div>
          </div>
          </div>
      </div>
      
    );
  }
}

export default SideNavigationBar;
