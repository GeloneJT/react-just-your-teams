import React from "react";
import "./style.css";

function ScheduleResults({ matches }) {
  console.log("MATCHES: ", matches);
  
  const schedule = matches.filter(match => match.sport_event_status.match_status === 'not_started');
  const score = matches.filter(match => match.sport_event_status.match_status === 'ended');

  console.log("SCHEDULE: ", schedule);
  console.log("SCORE: ", score);

    return (
      <div>
        <div className="grid-x grid-margin-x">
          Team Schedule
          {schedule.map((game) => (
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
        <div className="cell medium-auto" id="pastResults">
          Most Recent games
          {score.map((result) => (
            <ul>
              <li>Date: {result.sport_event.start_time}</li>
              <li>
                Score:
                {result.sport_event.competitors[0].name}
                {result.sport_event_status.home_score} vs
                {result.sport_event.competitors[1].name}
                {result.sport_event_status.away_score}
              </li>
              <li>
                {/* Competition:
                {result.sport_event.sport_event_context.compeitition.name} */}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
}

export default ScheduleResults;