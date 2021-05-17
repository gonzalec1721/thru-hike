import React from 'react';
import DailyFood from './DailyFood.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (

      <Router>
        <div>

<h1>Through The Woods</h1>
</div>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/daily_food">Daily Food</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/daily_food">
            <DailyFood />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
function Home() {
  return <h2>Home</h2>
}

function About() {
  return <DailyFood/>
}

function Users() {
  return <h2>Users</h2>;
}

export default App;