import Header from '../Header'

import Menu from '../Menu'

import './index.css'

const Profile = () => (
  <div>
    <Header />
    <div className="home-box">
      <Menu />
      <div className="dash-box">
        <div className="dash-part">
          <h1>Profile</h1>
          <div>
            <button type="button" className="book-btn">
              Book Appointment
            </button>
          </div>
        </div>
        <div className="overview">pavan</div>
      </div>
    </div>
  </div>
)

export default Profile
