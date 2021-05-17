import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateSong from './components/CreateSong';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import UpdateInfo from './components/UpdateInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowList} />
          <Route path='/create-song' component={CreateSong} />
          <Route path='/edit-song/:id' component={UpdateInfo} />
          <Route path='/show-song/:id' component={ShowDetails} />
        </div>
      </Router>
    );
  }
}

export default App;