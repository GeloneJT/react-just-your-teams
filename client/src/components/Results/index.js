import React from "react";
import { Grid  ,Cell } from "react-foundation";
import "./style.css";

function Results({ matches }) {
  const score = matches.filter(
    (match) => match.sport_event_status.match_status === "ended"
  );

  console.log("SCORE: ", score);

  return (
    <div className="cell medium-auto" id="pastResults">
      <div className="card profile-card-action-icons">
        <div className="card-section">
          <div className="profile-card-header">
            <div className="profile-card-author">
              <div className="card">
                <div className="profile-card-about">
                  <h5 className="about-title separator-left">
                    {" "}
                    Recent Results
                  </h5>
                  {score.slice(0, 5).map((result) => (
                    <ul className="list">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;