import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from './Router/About';
import Mining from './Router/Mining';
import Track from './Router/Track';

// import HomePage from './Router/HomePage';
import Login from './Router/Login';
import SignUp from './Router/SignUp';
import { loadUser } from './redux';
import Dashboard from './Router/Dashboard';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  } , [])
  return (
    <Provider store={store}>
      <Router >
        <div className="App">
          <div className="content" >
            <Switch >
              <Route path='/' exact component={Dashboard} />
              <Route path='/about' exact component={About} />
              <Route path='/mining' exact component={Mining} />
              <Route path='/track' exact component={Track} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={SignUp} />
            </Switch>
          </div>

        </div>
      </Router>
    </Provider>
  );
}


export default App;