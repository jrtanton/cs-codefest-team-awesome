import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";

const Filter = props => {
  const { skills, filterEventHandler, changeDateHandler, dateRange } = props;
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
        <div className="col-sm-12">
          <DatePicker
            className="form-control"
            selected={dateRange.startDate}
            selectsStart
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
