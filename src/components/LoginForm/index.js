import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  submitForm = event => {
    event.preventDefault()
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="login-form-container">
        <img src="" alt="website login" className="website-login" />
        <form className="form-container" onSubmit={this.submitForm}>
          <img src="" alt="website logo" />
          <h1 className="website-heading">Welcome to ANC Doctor Login</h1>
          <input
            type="text"
            placeholder="Enter MCI OR Phone or Email"
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            className="password-input"
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <p className="website-para">Forgot Password?</p>
          <p className="website-line">By Logging in you agree to our</p>
          <p className="website-line">
            Terms of service,Privacy Policy,Content Policy
          </p>
        </form>
      </div>
    )
  }
}

export default LoginForm
