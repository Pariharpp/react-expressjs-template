import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux"

import store from './../store.js';

import Home from './Home/Home.jsx';
import Editor from './Editor/Editor.jsx';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="wrapper">
            <Route exact path='/' component={Home}/>
            <Route exact path='/editor/:tag' component={Editor}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
