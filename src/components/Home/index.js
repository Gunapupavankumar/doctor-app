import Header from '../Header'

import Menu from '../Menu'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-box">
      <Menu />
      <div className="dash-box">
        <div className="dash-part">
          <h1>Dashboard Overview</h1>
          <div>
            <button type="button" className="book-btn">
              Book Appointment
            </button>
          </div>
        </div>
        <div className="overview">
          <div className="dash-lay">
            <div className="dash-book">
              <div>
                <img src="" alt="l" />
                <div>24%</div>
              </div>
              <h1 className="app-heading">Appointment</h1>
              <h1 className="app-number">85</h1>
              <p className="app-para">Compared to (90 Last month)</p>
            </div>
            <div className="dash-book">
              <div>
                <img src="" alt="l" />
                <div>24%</div>
              </div>
              <h1 className="app-heading">Appointment</h1>
              <h1 className="app-number">85</h1>
              <p className="app-para">Compared to (90 Last month)</p>
            </div>
            <div className="dash-book">
              <div>
                <img src="" alt="l" />
                <div>24%</div>
              </div>
              <h1 className="app-heading">Appointment</h1>
              <h1 className="app-number">85</h1>
              <p className="app-para">Compared to (90 Last month)</p>
            </div>
          </div>
          <div className="upcoming">
            <h1 className="upcoming-heading">Upcoming Appointment</h1>
            <div className="week-box">
              <button className="btn-today" type="button">
                Today
              </button>
              <button className="btn-week" type="button">
                Week
              </button>
              <button className="btn-month" type="button">
                Month
              </button>
            </div>
            <div className="patient-container">
              <div className="patient-box">
                <div>
                  <h1 className="patient-heading">Patient Name</h1>
                  <p className="patient-heading">Today| 16:00 pm</p>
                </div>
                <div className="join">
                  <div>
                    <button type="button" className="btn-join">
                      Join
                    </button>
                  </div>

                  <div>
                    <button type="button" className="btn-view">
                      View Appointment
                    </button>
                  </div>
                </div>
                <div>
                  <img src="" alt="img" />
                  <h1 className="v-heading">Virtual</h1>
                </div>
              </div>
              <div className="patient-box">
                <div>
                  <h1 className="patient-heading">Patient Name</h1>
                  <p className="patient-heading">Today| 16:00 pm</p>
                </div>
                <div className="join">
                  <div>
                    <button type="button" className="btn-join">
                      Join
                    </button>
                  </div>

                  <div>
                    <button type="button" className="btn-view">
                      View Appointment
                    </button>
                  </div>
                </div>
                <div>
                  <img src="" alt="img" />
                  <h1 className="v-heading">Virtual</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
