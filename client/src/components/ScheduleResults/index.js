import React from "react";
import "./style.css";

function ScheduleResults() {

    return (
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
              Team Schedule
            </div>
            <div className="cell medium-auto" id="pastResults">
              Most Recent games
            </div>
          </div>
        </div>
    );
}

export default ScheduleResults;