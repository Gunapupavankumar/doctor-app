import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import {GrLogout} from 'react-icons/gr'
import {Link} from 'react-router-dom'

import './index.css'

const Menu = () => (
  <div className="header-box">
    <div className="menu-box">
      <div className="menu-first">
        <Link to="/">
          <div className="btn-link">
            <MdOutlineSpaceDashboard />
            <button type="button" className="btn-menu">
              Dashboard
            </button>
          </div>
        </Link>

        <Link to="/Appointments">
          <div className="btn-link">
            <SlCalender />
            <button type="button" className="btn-menu">
              Appointments
            </button>
          </div>
        </Link>

        <Link to="/Patients">
          <div className="btn-link">
            <BsFillPeopleFill />
            <button type="button" className="btn-menu">
              Patients
            </button>
          </div>
        </Link>
        <Link to="/Messaging">
          <div className="btn-link">
            <AiFillMessage />
            <button type="button" className="btn-menu">
              Messaging
            </button>
          </div>
        </Link>
        <Link to="/Profile">
          <div className="btn-link">
            <CgProfile />
            <button type="button" className="btn-menu">
              Profile
            </button>
          </div>
        </Link>
      </div>
      <div className="menu-second">
        <div className="btn-link">
          <FiSettings />
          <button className="btn-menu" type="button">
            Settings
          </button>
        </div>
        <div className="btn-link">
          <GrLogout />
          <button className="btn-menu" type="button">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Menu
