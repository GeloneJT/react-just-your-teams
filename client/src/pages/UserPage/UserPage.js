import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import ScheduleResults from "../../components/ScheduleResults";


class UserPage extends Component {
  state = {
    schedData: [],
    scoreData: [],
  };

  componentDidMount() {
    this.searchSchedule("48");
    this.searchScore("Everton");
  }

  searchSchedule = (query) => {
    console.log("SEARCHSCHEDULE: " + query);
    API.schedule(query)
      .then((res) => {
        console.log(res);
        this.setState({ schedData: res.data.schedule });
      })
      .catch((err) => console.log(err));
  };

  searchScore = (team) => {
    console.log("SEARCHSCORE: " + team);
    API.score(team)
      .then((res) => {
        console.log(res);
        this.setState({ scoreData: res.data});
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log("RENDER: " + this.state.schedData.schedule);
    return (
      <div>
        <div className="grid-container">
          <div className="grid-container">
            <AboutMe />
            <ScheduleResults schedule={this.state.schedData} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;