import React, { Component } from "react";
import Header from "./components/common/Header";
import Cover from "./components/events_components/Cover";
import Filters from "./components/Filters";
import Events from "./components/Events";
import Footer from "./components/common/Footer";
import Sticky from "react-sticky-el";
import Paginate from "./components/common/Paginate";

class App extends Component {
  state = {
    events: [],
    categories: [],
    dates: [
      "Choisissez une date...",
      "Aujourd'hui",
      "Demain",
      "Ce week-end",
      "Cette semaine",
      "Semaine suivante",
      "Ce mois-ci",
      "Mois prochain"
    ],
    pageSize: 10,
    currentPage: 1
  };

  componentDidMount = () => {
    const eventsUrl = "/api/v1/events/index";
    const categoriesUrl = "/api/v1/categories/index";
    fetch(eventsUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          events: data
        });
      });
    fetch(categoriesUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data
        });
      });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { events, categories, dates, pageSize, currentPage } = this.state;
    return (
      <React.Fragment>
        <Header />
        <section>
          <div className="row">
            <aside className="col-md-3 pl-lg-5 bg-light">
              <Sticky topOffset={-100} bottomOffset={-20}>
                <Filters categories={categories} dates={dates} />
              </Sticky>
            </aside>
            <div className="col-md-8">
              <div className="container-fluid ">
                <div className="row">
                  <Cover />
                  <Events
                    events={events}
                    currentPage={currentPage}
                    pageSize={pageSize}
                  />
                </div>
                <div className="row align-items-center justify-content-center">
                  <Paginate
                    eventsCount={events.length}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
