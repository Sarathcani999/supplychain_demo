import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from './Router/About';
import HomePage from './Router/HomePage';
import Login from './Router/Login';
import SignUp from './Router/SignUp';

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router >
                        <div className="App">
                        <Switch >
                            <Route path='/' exact component={HomePage} />
                            <Route path='/about' exact component={About} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/register' exact component={SignUp} />
                        </Switch>
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }
}

/*
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from './Router/About';
import HomePage from './Router/HomePage';
import Login from './Router/Login';
import SignUp from './Router/SignUp';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <div className="App">
          <Switch >
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={About} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={SignUp} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
*/