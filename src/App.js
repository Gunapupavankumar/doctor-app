import {Route, Switch} from 'react-router-dom'
import Appointments from './components/Appointments'
import Messaging from './components/Messaging'
import Patients from './components/Patients'
import Profile from './components/Profile'
import Book from './components/Book'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/Appointments" component={Appointments} />
    <Route exact path="/Messaging" component={Messaging} />
    <Route exact path="/Patients" component={Patients} />
    <Route exact path="/Profile" component={Profile} />
    <Route exact path="/Book" component={Book} />
  </Switch>
)

export default App
