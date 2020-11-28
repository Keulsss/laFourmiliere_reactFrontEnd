import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/common/Header";
import Login from "./components/login";
import Profile from "./components/profile";
import Event from "./components/Event.jsx";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/notFound";
import AllEvents from "./components/allEvents";
import "./vendor/scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <section>
        <Switch>
          <Route path="/profile/:id" render={props => <Profile {...props} />} />
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
};

export default App;
