import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import Join from './components/Dashboard/Join';
import Chat from './components/ChatRoom/Chat/Chat';
import Login from './components/Login/Login';

import NavBar from './components/Layout/Navbar';
import { Provider } from 'react-redux';
import rootReducer from './tools/rootReducer';
import Dash from './components/Dashboard/Dashboard';
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Dash} />
              <Route path="/chat/:id" component={Chat} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
