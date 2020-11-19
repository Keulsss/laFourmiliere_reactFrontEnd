import React from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Filters from "./components/Filters";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Sticky from "react-sticky-el";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <div className="row">
            <aside className="col-md-3 pl-lg-5 bg-light">
              <Sticky topOffset={-100} bottomOffset={-20}>
                <Filters />
              </Sticky>
            </aside>
            <div className="col-md-9">
              <div className="container-fluid ">
                <Cover />
                <Event />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
