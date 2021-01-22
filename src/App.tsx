import React from "react";
import axios from 'axios';
import Dashboard from './components/Dashboard';
import store from './store/store';
import { Provider } from 'react-redux';
import "./App.css";

const App = () => {

  // Production
  axios.defaults.baseURL = "https://fyle-endpoints.herokuapp.com/api/";

  //Development
  // axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

  return (
    <Provider store={store}>
       <div className="App">
        <Dashboard/>
      </div>
    </Provider>
  )
}

export default App;
