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
        <BrowserRouter>
          <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App
