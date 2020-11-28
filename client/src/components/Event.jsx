import React, { Component } from "react";
import moment from "moment";
import "moment/locale/fr";
import http from "../services/httpService";
import { eventsUrl } from "../config.json";

class Event extends Component {
  state = {
    event: [],
    image: ""
  };

  async componentDidMount() {
    const event_id = this.props.match.params.id;
    const { data: event } = await http.get(`${eventsUrl}/${event_id}`);

    this.setState({ event, image: event.image.url });
  }

  render() {
    const { event, image } = this.state;
    return (
      <section className="py-10 bg-light">
        <div
          className="image image-overlay image-blur"
          style={{ backgroundImage: `url(${image})`, height: "40%" }}
        ></div>

        <div className="container shadow bordered">
          <div className="row bordered">
            <div
              className="col-md-12 col-lg-8 image-overlay"
              style={{ backgroundImage: `url(${image})`, height: 330 }}
            ></div>
            <div className="col-md-6 col-lg-4 p-5 text-left bg-light">
              <p>
                {moment(event.start_time)
                  .locale("fr")
                  .format("DD MMM")}
              </p>
              <h4 className="fs-24 font-weight-normal">{event.title}</h4>
              <p>
                {event.attendances}
                <span> </span>
                {event.attendances > 1 ? "inscrits" : "inscrit"}
                <span> </span>/<span> </span>
                {event.max_attendees}
                <span> </span>
                {event.max_attendees > 1 ? "places" : "place"}
              </p>
            </div>
            <div className="col-md-12 col-lg-8 bg-white separator-bottom"></div>
            <div className="col-md-6 col-lg-4 p-2 text-right bg-white separator-top separator-bottom">
              <button className="btn btn-sm btn-outline-primary col">
                S'inscrire
              </button>
            </div>
            <div className="col-md-12 col-lg-8 pr-8 pl-8 p-2 text-left bg-white">
              <p className="mb-3 text-secondary">
                <b>{event.tagline}</b>
              </p>
              <h4 className="text-decorated text-decorated--padding text-secondary">
                <b>À propos de ce bénévolat</b>
              </h4>
              <p className="p-3">{event.description}</p>
            </div>
            <div className="col-md-6 col-lg-4 p-2 text-left bg-white">
              <i className="icon-map fs-30 text-primary"></i>
              <h4 className="fs-20 font-weight-bold text-primary my-1">
                Adresse
              </h4>
              <p>
                {event.zip_code}, {event.city}{" "}
              </p>
              <i className="icon-clock fs-30 text-primary"></i>
              <h4 className="fs-20 font-weight-bold text-primary my-1">
                Horaires
              </h4>
              <p>
                {moment(event.start_time)
                  .locale("fr")
                  .format("llll")}
                <span> </span>-<span> </span>
                {moment(event.start_time)
                  .add(event.duration, "minutes")
                  .locale("fr")
                  .format("H:M")}
              </p>
              <i className="icon-user fs-30 text-primary"></i>
              <h4 className="fs-20 font-weight-bold text-primary my-1">
                Fourmi Référente
              </h4>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Event;
