import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux"

import store from './../store.js';

import Home from './Home/Home.jsx';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
