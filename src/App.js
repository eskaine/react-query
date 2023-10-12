import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQServantsPage } from './components/RQServants.page'
import { ServantsPage } from './components/Servants.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Servants</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Servants</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/super-heroes'>
            <ServantsPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQServantsPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
