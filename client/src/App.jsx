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
        <Cover />
        <section>
          <div className="container-fluid ">
            <div className="row">
              <aside className="col-md-4 pl-lg-5 mt-7">
                <Sticky
                  stickyStyle={{ transform: "translateY(100px)" }}
                  topOffset={-80}
                >
                  <Filters />
                </Sticky>
              </aside>
              <div className="col-md-8">
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
