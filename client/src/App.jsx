import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/common/Header";
import Login from "./components/login";
import Logout from "./components/logout"
import Profile from "./components/profile";
import Event from "./components/Event.jsx";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/notFound";
import AllEvents from "./components/allEvents";
import auth from "./services/authService"
import "./vendor/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user })
  }

  render() {
    return (
      <React.Fragment>
        <Header user={this.state.user} />
        <ToastContainer />
        <section>
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route
              path="/profile/:id"
              render={props => <Profile {...props} />}
            />
            <Route path="/signin" component={Login} />
            <Route path="/events/:id" render={props => <Event {...props} />} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/all-events" exact component={AllEvents} />
            <Redirect from="/" to="/all-events" />
            <Redirect to="/not-found" />
          </Switch>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
