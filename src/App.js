import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from './views/HomeView';
import MoviesFindView from './views/MoviesFindView';


export class App extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/movies" component={MoviesFindView} />
        </Switch>
      </div>
    );
  }
}

export default App;
