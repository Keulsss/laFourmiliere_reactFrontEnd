import React, { Component } from "react";
import Header from "./components/common/Header";
import Cover from "./components/events_components/Cover";
import Events from "./components/Events";
import Footer from "./components/common/Footer";
import Paginate from "./components/common/Paginate";
import ListGroup from "./components/common/listGroup";
import Widget from "./components/common/widget";
import dates from "./components/utils/dates";
import paginator from "./components/utils/paginator";
import "./vendor/scss/style.scss";
import StickyBox from "react-sticky-box";
class App extends Component {
  state = {
    events: [],
    categories: [],
    dates: [],
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
    this.setState({ dates });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = item => {
    this.setState({ selectedCategory: item, currentPage: 1 });
  };

  handleDateSelect = item => {
    this.setState({ selectedDate: item, currentPage: 1 });
  };

  render() {
    const {
      events,
      categories,
      dates,
      pageSize,
      currentPage,
      selectedDate,
      selectedCategory
    } = this.state;

    const filtered = selectedCategory
      ? events.filter(e => e.category_id === selectedCategory.id)
      : events;

    const eventsPaginated = paginator(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <Header />
        <section>
          <div className="row">
            <aside className="col-md-3 pl-lg-4 bg-light ">
              <StickyBox offsetTop={100} offsetBottom={20}>
                <div
                  style={{
                    height: 687,
                    position: "relative",
                    overflow: "auto"
                  }}
                >
                  <ListGroup
                    items={dates}
                    onItemSelect={this.handleDateSelect}
                    selectedItem={selectedDate}
                    title="DATE"
                  />
                  <Widget
                    items={categories}
                    onItemSelect={this.handleCategorySelect}
                    selectedItem={selectedCategory}
                    title="CATEGORIE"
                  />
                </div>
              </StickyBox>
            </aside>
            <div className="col-md-7">
              <div className="container-fluid content">
                <Cover />
                <div className="row mb-0">
                  <Events
                    currentPage={currentPage}
                    pageSize={pageSize}
                    eventsPaginated={eventsPaginated}
                  />
                </div>
                <div className="row align-items-center justify-content-center mb-1">
                  <Paginate
                    eventsCount={filtered.length}
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
