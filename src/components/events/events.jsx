import React, { useState, useEffect } from "react";
import EventCard from "../event-card/event-card";
import Filter from "../filter/filter";
import {
  getEvents,
  seedEvents,
  attendEvent
} from "../../services/event-service";
import "./events.css";

const Events = props => {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });
  const [skills, setSkills] = useState([
    { id: 8, name: "Coding" },
    { id: 9, name: "Developers" },
    { id: 10, name: "Heavy Lifting" },
    { id: 11, name: "any" },
    { id: 12, name: "Coaching" },
    { id: 13, name: "Critter Wrangling" },
    { id: 14, name: "Tutoring" },
    { id: 15, name: "Tutoring math" },
    { id: 16, name: "Power Tools" },
    { id: 17, name: "Dog Walking" },
    { id: 19, name: "Cooking" }
  ]);

  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
      setAllEvents(events);
    });
  }, []);

  useEffect(() => {
    const selectedSkills = skills
      .filter(s => s.active)
      .map(s => s.name)
      .join("-");

    if (!selectedSkills) {
      setEvents(allEvents);
      return;
    }

    console.log(allEvents);

    const matchingEvents = Object.keys(allEvents)
      .map(k => allEvents[k])
      .filter(
        e => e.skills.filter(s => selectedSkills.includes(s.name)).length > 0
      );

    setEvents(matchingEvents);
  }, [skills]);

  const handleAttendEvent = e => {
    const eventId = e.currentTarget.id;
    attendEvent(eventId, localStorage.getItem("userId"));
  };

  const handleSeedEvents = e => {
    seedEvents();
  };

  const handleFilterEvent = e => {
    const name = e.currentTarget.id;
    const skillsCopy = [...skills];
    const index = skillsCopy.findIndex(s => s.name === name);
    skillsCopy[index].active = !skillsCopy[index].active;
    setSkills(skillsCopy);
  };

  const handleChange = ({ startDate, endDate }) => {
    startDate = startDate || dateRange.startDate;
    endDate = endDate || dateRange.endDate;
    setDateRange({ startDate, endDate });
  };

  const handleChangeStart = startDate => handleChange({ startDate });

  const handleChangeEnd = endDate => handleChange({ endDate });

  return (
    <React.Fragment>
      <Filter
        filterEventHandler={handleFilterEvent}
        changeStartDateHandler={handleChangeStart}
        changeEndDateHandler={handleChangeEnd}
        dateRange={dateRange}
        skills={skills}
      />
      <div className="event-container">
        {events &&
          Object.keys(events).map(k => (
            <EventCard
              key={k}
              event={events[k]}
              attendEventHandler={handleAttendEvent}
            />
          ))}
      </div>
      {/* <button className="btn btn-defatult" onClick={handleSeedEvents}>
        Seed Events
      </button> */}
    </React.Fragment>
  );
};

export default Events;
