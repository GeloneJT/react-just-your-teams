import React from "react";
import "./style.css";
import { Cell } from "react-foundation";

function Schedule({ matches }) {
  console.log("MATCHES: ", matches);
  
  const schedule = matches.filter(match => match.sport_event_status.match_status === 'not_started');
  

  console.log("SCHEDULE: ", schedule);


    return (
      <div className="cell medium-auto" id="futureSchedule">
        <div className="card profile-card-action-icons">
          <div className="card-section">
            <div className="profile-card-header">
              <div className="profile-card-author">
                <div className="card">
                  <div className="profile-card-about">
                    <h5 className="about-title separator-left">
                      Team Schedule
                    </h5>
                    {schedule.slice(-5).map((game) => (
                      <ul>
                        <li>Date: {game.sport_event.start_time}</li>
                        <li>
                          {game.sport_event.competitors[0].name} vs
                          {game.sport_event.competitors[1].name}
                        </li>
                        <li>
                          {/* Competition:
                {game.sport_event.sport_event_context.compeitition.name} */}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Schedule;