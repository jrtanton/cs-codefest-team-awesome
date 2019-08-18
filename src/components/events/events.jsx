import React, { useState, useEffect } from "react";
import EventCard from "../event-card/event-card";
import Filter from "../filter/filter";
import { getEvents, seedEvents } from "../../services/event-service";
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
    const selectedSkills = skills
      .filter(s => s.active)
      .map(s => s.name)
      .join("-");

    if (!selectedSkills) {
      setEvents(allEvents);
      return;
    }

    const matchingEvents = allEvents.filter(
      e => e.skills.filter(s => selectedSkills.includes(s.name)).length > 0
    );

    setEvents(matchingEvents);
  }, [skills]);

  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
      setAllEvents(events);
    });
  }, []);

  const handleAttendEvent = e => {
    console.log(e.currentTarget.id);
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

  const handleChangeDate = ({ startDate, endDate }) => {
    startDate = startDate || dateRange.startDate;
    endDate = endDate || dateRange.endDate;
    setDateRange({ startDate: startDate, endDate: endDate });
  };

  return (
    <React.Fragment>
      <Filter
        filterEventHandler={handleFilterEvent}
        changeDateHandler={handleChangeDate}
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
      <button onClick={handleSeedEvents}>Seed Events Table</button>
    </React.Fragment>
  );
};

export default Events;
