import React from "react";
import Moment from "react-moment";
import "moment/locale/fr";

const EventCard = ({ event }) => {
  return (
    <div className="boxed rising p-2 card card-minimal">
      <div className="row no-gutters">
        <div className="col-md-4">
          <a href="#" className="card-img-container">
            <img className="card-img" src={event.image.url} alt="Card cap" />
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-primary">
              <Moment locale="fr" format="llll">
                {event.start_time}
              </Moment>
            </h5>
            <a href="#">
              <h5 className="card-title text-black">{event.title}</h5>
            </a>
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
