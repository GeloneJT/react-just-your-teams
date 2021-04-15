import React from "react";
import { Grid, Cell } from "react-foundation";
import "./style.css";

function Results({ matches }) {
  const score = matches.filter(
    (match) => match.sport_event_status.match_status === "ended"
  );

  console.log("SCORE: ", score);

  return (
    <div className="cell medium-auto" id="pastResults">
      <div className="card result-card-action-icons">
        <div className="card-section">
          <div className="result-card-header">
            <div className="result-card-author">
              <div className="card">
                <div className="result-card-about">
                  <h5 className="about-title separator-left">
                    {" "}
                    Recent Results
                  </h5>
                  {score.slice(0, 5).map((result) => (
                    <Grid>
                      <Cell small={12} large={12}>
                        <Grid>
                          Date: {result.sport_event.start_time.slice(0, 10)}
                        </Grid>
                        <Grid>
                          Score: {result.sport_event.competitors[0].name}{" "}
                          {result.sport_event_status.home_score} vs{" "}
                          {result.sport_event.competitors[1].name}
                          {" "}
                          {result.sport_event_status.away_score}
                        </Grid>
                        <Grid>
                        Competition:{" "}
                        {result.sport_event.sport_event_context.competition.name}
                        </Grid>
                      </Cell>
                    </Grid>
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