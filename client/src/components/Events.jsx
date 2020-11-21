import React from "react";
import EventCard from "./events_components/EventCard";

const Events = ({ eventsPaginated }) => {
  const allEvents = eventsPaginated.map(event => (
    <EventCard event={event} key={event.id} />
  ));
  const noEvent = (
    <div className="container">
      <div className="col-md-12 col-lg-12">
        <h5>Rien ne correspond à votre recherche</h5>
      </div>
    </div>
  );
  return <div>{allEvents.length > 0 ? allEvents : noEvent}</div>;
};

export default Events;
