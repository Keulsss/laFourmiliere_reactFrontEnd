import React from "react";
import EventCard from "./EventCard";
import sorry from "../../images/feeling-sorry.png";
import orderByAttendances from "../utils/orderByAttendances";

const Events = ({ eventsPaginated, events }) => {
  const ordered = orderByAttendances(events);
  const allEvents = (
    <div className="row mb-0 mt-0">
      {eventsPaginated.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
  const noEvent = (
    <div className="row mb-0 mt-2">
      <div className="col-md-7">
        <h4>
          Rien ne correspond à votre recherche, peut être seriez vous
          interressés pas les options ci-dessous
        </h4>
      </div>
      <div
        className="col-md-3"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
      >
        <div className="presentation-circle">
          <figure style={{ backgroundImage: `url(${sorry})` }}></figure>
        </div>
      </div>
      <div className="row mt-2">
        <div className="container-fluid">
          <h4>Événements populaires</h4>
          {ordered.map(event => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
  return eventsPaginated.length > 0 ? allEvents : noEvent;
};

export default Events;
