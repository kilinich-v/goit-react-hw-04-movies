import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import MoviesFindView from './views/MoviesFindView';
import MovieDetailsView from './views/MovieDetailsView';

export class App extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container">
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.moviesDetails} component={MovieDetailsView} />
          <Route path={routes.moviesFind} component={MoviesFindView} />
        </Switch>
      </div>
    );
  }
}

export default App;
