import React from "react";
import { Grid, Cell } from "react-foundation";
import "./style.css";

function Schedule({ matches }) {
  console.log("MATCHES: ", matches);
  
  const schedule = matches.filter(match => match.sport_event_status.match_status === 'not_started');
  

  console.log("SCHEDULE: ", schedule);


    return (
      <div className="cell medium-auto" id="futureSchedule">
        <div className="card schedule-card-action-icons">
          <div className="card-section">
            <div className="schedule-card-header">
              <div className="schedule-card-author">
                <div className="card">
                  <div className="schedule-card-about">
                    <h5 className="about-title separator-left">
                      Team Schedule
                    </h5>
                    {schedule.slice(-5).map((game) => (
                      <Grid>
                        <Cell>
                          <Grid>
                            Date: {game.sport_event.start_time.slice(0, 10)}
                          </Grid>
                          <Grid>
                            Teams: {game.sport_event.competitors[0].name} vs{" "}
                            {game.sport_event.competitors[1].name}
                          </Grid>
                          <Grid>
                            Competition:{" "}
                            {
                              game.sport_event.sport_event_context.competition
                                .name
                            }
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

export default Schedule;