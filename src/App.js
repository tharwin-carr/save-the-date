import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import './App.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import LandingPage from './LandingPage/LandingPage'
import Dates from './Dates/Dates'
import AddDate from './AddDate/AddDate'

function App() {
  return (
    <div className='website-container'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/dates' component={Dates} />
          <Route path='/add-date' component={AddDate} />
        </Switch>      
      </main>
      <footer>
        <Footer />
      </footer>      
    </div>

  )
}

export default App