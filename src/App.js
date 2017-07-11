import React, { Component } from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Github from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an </h3>
            <h1>API PARTY</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/github">GitHub API</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' render={() => <h1>Github!</h1>}/>
          <Route render={() => <p> To get started, click one  of the links above</p>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
