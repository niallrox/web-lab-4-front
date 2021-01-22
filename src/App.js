import './App.css';
import './components/Header'
import React, {Component} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import PublicRoute from "./security/PublicRoute";
import ProtectedRoute from "./security/ProtectedRoute";

class App extends Component {
  render() {
      return (
          <BrowserRouter basename={'/~s286535/lab4'}>
              <div>
                  <Switch>
                      <PublicRoute path="/login" component={Login}/>
                      <ProtectedRoute exact path="/" component={MainPage}/>
                  </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

export default App
