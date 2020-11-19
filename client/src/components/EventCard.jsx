import React from "react";
import Moment from "react-moment";
import "moment/locale/fr";

const EventCard = props => {
  const { event } = props;
  return (
    <div
      key={event.id}
      className="tab-pane show active"
      role="tabpanel"
      aria-labelledby="component-1-1"
    >
      <div className="component-example">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="card card-minimal">
                <a href="#" className="card-img-container">
                  <img
                    className="card-img"
                    src={event.image.url}
                    alt="Card cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <Moment locale="fr" format="llll">
                      {event.start_time}
                    </Moment>
                  </h5>
                  <h5 className="card-title">
                    <a href="#">{event.title}</a>
                  </h5>
                  <span className="card-meta">
                    {event.city} - {event.zip_code}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
