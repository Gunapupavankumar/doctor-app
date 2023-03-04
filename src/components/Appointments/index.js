import Header from '../Header'

import Menu from '../Menu'

import './index.css'

const Appointments = props => {
  const onClickBook = () => {
    const {history} = props
    history.replace('/Book')
  }

  return (
    <div>
      <Header />
      <div className="home-box">
        <Menu />
        <div className="dash-box">
          <div className="dash-part">
            <h1>Appointments</h1>
            <div>
              <button onClick={onClickBook} type="button" className="book-btn">
                Book Appointment
              </button>
            </div>
          </div>
          <div className="overview-appointment">
            <img src="" alt="logo" />
            <h1>Your Appointments will show here</h1>
            <p>It seems,there are no appointments booked as of now</p>
            <button onClick={onClickBook} type="button" className="book-btn">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments
