import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/common/Header";
import LoginForm from "./components/common/loginForm";
import Event from "./components/common/Event.jsx";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/notFound";
import AllEvents from "./components/allEvents";
import "./vendor/scss/style.scss";
import "./vendor/css/style.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/signin" component={LoginForm} />
          <Route path="/events/:id" render={props => <Event {...props} />} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/all-events" exact component={AllEvents} />
          <Redirect from="/" to="/all-events" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
