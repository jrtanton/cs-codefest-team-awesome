import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";

const Filter = props => {
  const {
    skills,
    filterEventHandler,
    changeStartDateHandler,
    changeEndDateHandler
  } = props;
  const { startDate, endDate } = props.dateRange;
  return (
    <div id="filter-container">
      <div className="row">
        <div className="col-sm-12 skills-container">
          <h4>Skills</h4>
          {skills.map(s => (
            <div
              key={s.id}
              id={s.name}
              onClick={filterEventHandler}
              className={s.active ? "active" : ""}
            >
              {s.name}
            </div>
          ))}
        </div>
        <div className="column">
          <h4>Dates</h4>
          <div className="col-sm-12">
            <DatePicker
              className="form-control"
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={changeStartDateHandler}
            />
          </div>
          <div className="col-sm-12">
            <DatePicker
              className="form-control"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              onChange={changeEndDateHandler}
              minDate={startDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
