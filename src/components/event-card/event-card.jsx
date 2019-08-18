import React from "react";
import "./event-card.css";

const EventCard = props => {
  const { event, attendEventHandler } = props;
  return (
    <div className="row e-card">
      <div className="col-sm-3">
        <img
          className="event-img"
          src="https://picsum.photos/300/200"
          alt="text"
        />
      </div>
      <div className="col-sm-9">
        <h3>{event.title}</h3>
        <p>{event.organization.name}</p>
        <p>{event.description}</p>
        <p>
          <img
            className="location-icon"
            src="/imgs/calendar.png"
            alt="calendar-icon"
          />
          {new Date(event.time).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <p>
          <img
            className="location-icon"
            src="/imgs/location.png"
            alt="location-icon"
          />
          {event.location}
        </p>
        <div className="skills-container">
          {event.skills.map(s => (
            <div key={s.id}>{s.name}</div>
          ))}
        </div>
        <button
          id={event.id}
          onClick={attendEventHandler}
          className="float-right btn btn-primary"
        >
          Attend
        </button>
      </div>
    </div>
  );
};

export default EventCard;
