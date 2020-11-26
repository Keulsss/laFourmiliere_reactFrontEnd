import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "moment/locale/fr";

const EventCard = ({ event }) => {
  return (
    <div className="boxed rising p-2 card card-minimal">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Link to={`/events/${event.id}`}>
            <img
              className="card-img-container"
              src={event.image.url}
              alt="Card cap"
            />
          </Link>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-primary">
              <Moment locale="fr" format="llll">
                {event.start_time}
              </Moment>
            </h5>
            <Link to={`/events/${event.id}`}>
              <h5 className="card-title text-black">{event.title}</h5>
            </Link>
            <span className="card-meta">
              {event.city} - {event.zip_code}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
