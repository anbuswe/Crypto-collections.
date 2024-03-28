import {
  HiMiniArrowTrendingUp,
  HiMiniArrowTrendingDown,
} from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FaRecycle } from "react-icons/fa";
import {  MdOutlineWbSunny } from "react-icons/md";
import { PiMountains } from "react-icons/pi";
import { BsExclamationCircle, BsDroplet } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import './index.css'

const Assets=()=>(
    <div className="assets-cont">
    <div className="assets-hed-cont">
      <h3>Assets</h3>
      <p>
        Today <IoIosArrowDown />
      </p>
    </div>
    <div className="coins-card-cont">
      <div className="coin-card">
        <div className="card-hed-cont">
          <div className="profil-bg nbst">
            <PiMountains />
          </div>
          <h3>NBST</h3>
        </div>
        <p>Nature Based Solution Token</p>
        <div className="prices-cont">
          <h3 className="card-price">0.72 $</h3>
          <p className="card-price-growth">
            +11.01% <HiMiniArrowTrendingUp />
          </p>
        </div>
        <div className="card-btn-cont">
          <div className="nbts-icon">
            <BsExclamationCircle />
          </div>
          <button type="button" className="coins-trade-btn nbst">
            Trad
          </button>
        </div>
      </div>
      <div className="coin-card">
        <div className="card-hed-cont">
          <div className="profil-bg eft">
            <IoBulbOutline />
          </div>
          <h3>EFT</h3>
        </div>
        <p>Energy Efficiency Token</p>
        <div className="prices-cont">
          <h3 className="card-price">0.36 $</h3>
          <p className="card-price-growth">
            +9.15% <HiMiniArrowTrendingUp />
          </p>
        </div>
        <div className="card-btn-cont">
          <div className="eft-icon">
            <BsExclamationCircle />
          </div>
          <button type="button" className="coins-trade-btn eft">
            Trad
          </button>
        </div>
      </div>
      <div className="coin-card">
        <div className="card-hed-cont">
          <div className="profil-bg wpct">
            <FaRecycle />
          </div>
          <h3>WPCT</h3>
        </div>
        <p>Wast management and Plastic Credits Token</p>
        <div className="prices-cont">
          <h3 className="card-price">1.20$</h3>
          <p className="card-price-growth">
            +11.01% <HiMiniArrowTrendingUp />
          </p>
        </div>
        <div className="card-btn-cont">
          <div className="wpct-icon">
            <BsExclamationCircle />
          </div>
          <button type="button" className="coins-trade-btn wpct">
            Trad
          </button>
        </div>
      </div>
      <div className="coin-card">
        <div className="card-hed-cont">
          <div className="profil-bg ret">
            <MdOutlineWbSunny />
          </div>
          <h3>RET</h3>
        </div>
        <p>Renewable Energy Token</p>
        <div className="prices-cont">
          <h3 className="card-price">0.46$</h3>
          <p className="card-price-growth">
            -0.56% <HiMiniArrowTrendingDown />
          </p>
        </div>
        <div className="card-btn-cont">
          <div className="ret-icon">
            <BsExclamationCircle />
          </div>
          <button type="button" className="coins-trade-btn ret">
            Trad
          </button>
        </div>
      </div>
      <div className="coin-card">
        <div className="card-hed-cont">
          <div className="profil-bg wet">
            <BsDroplet />
          </div>
          <h3>WET</h3>
        </div>
        <p>Water Token</p>
        <div className="prices-cont">
          <h3 className="card-price">0.48$</h3>
          <p className="card-price-growth">
            -1.48% <HiMiniArrowTrendingDown />
          </p>
        </div>
        <div className="card-btn-cont">
          <div className="wet-icon">
            <BsExclamationCircle />
          </div>
          <button type="button" className="coins-trade-btn wet">
            Trad
          </button>
        </div>
      </div>
    </div>
  </div>
)
export default Assets