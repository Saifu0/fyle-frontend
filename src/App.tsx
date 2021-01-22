import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import store from './store/store';
import { Provider } from 'react-redux';
import "./App.css";
import Favorites from "./components/Favorites";

const App = () => {

  // Production
  axios.defaults.baseURL = "https://fyle-endpoints.herokuapp.com/api/";

  //Development
  // axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

  return (

    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
              <Route path="/" exact component={Dashboard}/>
              <Route path="/favorites" component={Favorites}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App;
