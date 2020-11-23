import React from "react";
import "./vendor/scss/style.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/common/Header";
import AllEvents from "./components/allEvents";
import Event from "./components/common/Event.jsx";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/notFound";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Switch>
          <Route
            path="/events/:title?/:id"
            render={props => <Event {...props} />}
          />
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
