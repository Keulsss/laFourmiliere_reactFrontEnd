import React from "react";
import EventCard from "./events_components/EventCard";
import paginator from "./utils/paginator";

const Events = ({ events, currentPage, pageSize }) => {
  const eventsPaginated = paginator(events, currentPage, pageSize);
  const allEvents = eventsPaginated.map(event => (
    <EventCard event={event} key={event.id} />
  ));
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
};

export default Events;
