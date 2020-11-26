import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/common/Header";
import Login from "./components/login";
import Event from "./components/Event.jsx";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/notFound";
import AllEvents from "./components/allEvents";
import "./vendor/scss/style.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/signin" component={Login} />
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
