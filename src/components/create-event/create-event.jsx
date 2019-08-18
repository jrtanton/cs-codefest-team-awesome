import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createEvent } from "../../services/event-service";
import "react-datepicker/dist/react-datepicker.css";
// import "./create-event.css";

export default function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [time, setTime] = useState(new Date());

  const inputHandler = e => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "newSkill":
        setNewSkill(e.target.value);
        break;
      default:
        break;
    }
  };

  const skillsHandler = e => {
    const skillsCopy = [...skills];
    skillsCopy.push(newSkill);
    setSkills(skillsCopy);
    setNewSkill("");
  };

  const createEventHandler = e => {
    e.preventDefault();
    const event = {
      title,
      description,
      time,
      location,
      volunteers: [],
      organization: {
        id: 12,
        name: "FoodBank",
        description: "A place to feed hungry people",
        email: "fb@food.com"
      },
      skills: skills.map(s => {
        return {
          name: s
        };
      })
    };
    createEvent(event);
    props.history.push("/events");
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={createEventHandler}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="titleDescription"
            placeholder="Enter title"
            value={title}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            aria-describedby="descriptionDescription"
            placeholder="Enter description"
            value={description}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            aria-describedby="locationDescription"
            placeholder="Enter location"
            value={location}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newSkill">Skills Needed</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="newSkill"
              aria-describedby="skillsDescription"
              placeholder="Enter a skill needed"
              value={newSkill}
              onChange={inputHandler}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                onClick={skillsHandler}
                type="button"
              >
                Add Skill
              </button>
            </div>
          </div>
          <small id="skillsDescription" className="form-text text-muted">
            What skills do you need for your event?
          </small>
          <div className="skills-container">
            {skills.map((v, i) => (
              <div key={i}>{v}</div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date Of Event</label>
          <br />
          <DatePicker
            id="date"
            className="form-control date-picker"
            selected={time}
            onChange={setTime}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
