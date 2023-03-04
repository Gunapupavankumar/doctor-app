import Header from '../Header'

import Menu from '../Menu'

import './index.css'

const Messaging = () => (
  <div>
    <Header />
    <div className="home-box">
      <Menu />
      <div className="dash-box">
        <div className="dash-part">
          <h1>Messaging</h1>
        </div>
        <div className="overview">
          <img src="" alt="logo" />
          <h1>Your message will show here</h1>
          <p>It seems,there are no history of consultations</p>
        </div>
      </div>
    </div>
  </div>
)

export default Messaging
