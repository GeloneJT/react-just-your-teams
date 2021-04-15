import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import Schedule from "../../components/ScheduleResults";
import Results from "../../components/Results"; 
import { Grid, Cell } from "react-foundation";





class UserPage extends Component {

  

  state = {
    matchData: [],
    team: ""
  };


 
  
//need get router to get user info
//need to style page

  componentDidMount() {
    this.searchSchedule("48"); //search schedule needs to be equal to team value -> currently only hardcode working if hardcoded on backend
  }

  searchSchedule = (query) => {
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
            <Grid className="display" isExpanded>
              <Cell small={12} large={2}>
                <AboutMe />
              </Cell>
              <Cell small={12} large={5}>
                <Schedule matches={this.state.matchData} />
              </Cell>
              <Cell small={12} large={5}>
                <Results matches={this.state.matchData} />
              </Cell>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;