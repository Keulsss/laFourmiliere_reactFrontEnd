import React from "react";
import EventCard from "./EventCard";

class Event extends React.Component {
  state = { events: [] };

  componentDidMount = () => {
    const url = "/api/v1/events/index";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          events: data
        });
      });
  };

  render() {
    const { events } = this.state;
    const allEvents = events.map(event => <EventCard event={event} />);
    const noEvent = (
      <div
        className="tab-pane show active"
        role="tabpanel"
        aria-labelledby="component-1-1"
      >
        <div className="component-example">
          <div className="container">
            <div className="row">
              <h5>Aucun évènement créé</h5>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{events.length > 0 ? allEvents : noEvent}</div>;
  }
}
export default Event;
