import Header from '../Header'

import Menu from '../Menu'

import './index.css'

const Patients = () => (
  <div>
    <Header />
    <div className="home-box">
      <Menu />
      <div className="dash-box">
        <div className="dash-part">
          <h1>Patients</h1>
          <div>
            <button type="button" className="book-btn">
              Add Patient
            </button>
          </div>
        </div>
        <div className="overview">
          <img src="" alt="logo" />
          <h1>Patients will show here</h1>
          <p>It seems,there are no patients</p>
          <button type="button" className="book-btn">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Patients
