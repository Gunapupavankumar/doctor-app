import {Component} from 'react'
import Header from '../Header'
import Timer from '../Timer'
import Menu from '../Menu'

import './index.css'

const initialSectionDetails = [
  {
    uniqueNo: 'morning_1',
    section: 'morning',
    time: '10:00 Am',
    isActive: false,
  },
  {
    uniqueNo: 'morning_2',
    section: 'morning',
    time: '10:30 Am',
    isActive: false,
  },
  {
    uniqueNo: 'morning_3',
    section: 'morning',
    time: '11:00 Am',
    isActive: false,
  },
  {
    uniqueNo: 'morning_4',
    section: 'morning',
    time: '11:45 Am',
    isActive: false,
  },
  {
    uniqueNo: 'afternoon_1',
    section: 'afternoon',
    time: '12:00 Am',
    isActive: false,
  },
  {
    uniqueNo: 'afternoon_2',
    section: 'afternoon',
    time: '12:15 Am',
    isActive: false,
  },
  {
    uniqueNo: 'afternoon_3',
    section: 'afternoon',
    time: '03:45 Am',
    isActive: false,
  },
  {
    uniqueNo: 'evening_1',
    section: 'evening',
    time: '04:00 Am',
    isActive: false,
  },
  {
    uniqueNo: 'evening_2',
    section: 'evening',
    time: '04:15 Am',
    isActive: false,
  },
  {
    uniqueNo: 'evening_3',
    section: 'evening',
    time: '04:45 Am',
    isActive: false,
  },
]

class Book extends Component {
  state = {
    sectionDetails: initialSectionDetails,
  }

  deleteTime = uniqueNo => {
    this.setState(prevState => ({
      sectionDetails: prevState.sectionDetails.map(each => {
        if (uniqueNo === each.uniqueNo) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

  submitConfirm = event => {
    event.preventDefault()
    const {sectionDetails} = this.state

    const filteredDetails = sectionDetails.filter(
      each => each.isActive !== true,
    )

    this.setState({sectionDetails: filteredDetails})
  }

  render() {
    const {sectionDetails} = this.state

    const morningDetails = sectionDetails.filter(
      each => each.section === 'morning',
    )
    const afternoonDetails = sectionDetails.filter(
      each => each.section === 'afternoon',
    )
    const eveningDetails = sectionDetails.filter(
      each => each.section === 'evening',
    )
    return (
      <div>
        <Header />
        <div className="home-box">
          <Menu />
          <div className="dash-box">
            <div className="dash-part">
              <h1>Book Appointment</h1>
            </div>
            <div className="overview-book">
              <div className="patient-name">
                <img src="" alt="logo" className="patient-logo" />
                <h1 className="patient-head">Patient Name</h1>
                <div>
                  <p className="patient-para">MR NO: 12345</p>
                  <p className="patient-para">Gender: Male</p>
                  <p className="patient-para">Age: 27</p>
                  <p className="patient-para">
                    Guardian: Guardian Name(Relation)
                  </p>
                  <p className="patient-para">phone: 987654211</p>
                </div>
              </div>
              <div className="doctor">
                <h1 className="patient-head">Doctor</h1>

                <div>
                  <img src="" alt="logo" />
                  <div>
                    <h1 className="patient-head-para">Dr.Lakshmi K</h1>
                    <p className="patient-para">Psychiatrist</p>
                    <p className="patient-para">MCI No: 12345</p>
                  </div>
                </div>
              </div>
              <div className="choose">
                <h1>Choose Time</h1>
                <form onSubmit={this.submitConfirm}>
                  <div>
                    <p>Morning</p>
                    <div>
                      {morningDetails.map(each => (
                        <Timer
                          key={each.uniqueNo}
                          deleteTime={this.deleteTime}
                          details={each}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p>afternoon</p>
                    <div>
                      {afternoonDetails.map(each => (
                        <Timer
                          key={each.uniqueNo}
                          deleteTime={this.deleteTime}
                          details={each}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p>evening</p>
                    <div>
                      {eveningDetails.map(each => (
                        <Timer
                          key={each.uniqueNo}
                          deleteTime={this.deleteTime}
                          details={each}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="confirm">
                      confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Book
