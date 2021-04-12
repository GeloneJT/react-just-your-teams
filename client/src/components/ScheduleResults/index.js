import React from "react";
import "./style.css";

function ScheduleResults({schedule}) {
console.log("schedule: ", schedule)
    return (
      <div>
       
          <div className="grid-x grid-margin-x">
            Team Schedule
            <ul>
            {schedule.map(game => (
              <li>{JSON.stringify(game.scheduled)}</li>

            ))}
            </ul>
          </div>
          <div className="cell medium-auto" id="pastResults">
            Most Recent games
          </div>
        
      </div>
    );
}

export default ScheduleResults;