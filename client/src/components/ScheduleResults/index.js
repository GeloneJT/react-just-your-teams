import React from "react";
import "./style.css";

function ScheduleResults({results}) {
console.log("RESULTS: " + { results })
    return (
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            Team Schedule
            <ul>
            {results.map(result => (
              <li>{result.schedule.competitors}</li>

            ))}
            </ul>
          </div>
          <div className="cell medium-auto" id="pastResults">
            Most Recent games
          </div>
        </div>
      </div>
    );
}

export default ScheduleResults;