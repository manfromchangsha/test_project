import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  PropTypes as MapPropTypes,
} from 'react-leaflet'
import {getParameter} from './components/common/common.js'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/userLogin';
import Register from './components/register/register';
import Profile from './components/profile/profile';
import Homepage from './components/homePage/homePage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
    }
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Profile' component={Profile} />

          <Footer />
        </div>
      </Router>
    );
  }
}





export default App;
