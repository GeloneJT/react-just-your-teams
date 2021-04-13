import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import ScheduleResults from "../../components/ScheduleResults";


class UserPage extends Component {
  state = {
    matchData: [],
  };

  

  componentDidMount() {
    this.searchSchedule("48");
  }

  searchSchedule = (query) => {
    // console.log("SEARCHSCHEDULE: " + query);
    API.schedule(query)
      .then((res) => {
        let summaries = res.data.summaries;
        this.setState({ matchData: summaries })
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log("RENDER: " + this.state.schedData);
    return (
      <div>
        <div className="grid-container">
          <div className="grid-container">
            <AboutMe />
            <ScheduleResults 
            matches={this.state.matchData}
           
             />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;