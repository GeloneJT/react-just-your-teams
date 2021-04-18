import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import Schedule from "../../components/Schedule";
import Results from "../../components/Results"; 
import { Grid, Cell } from "react-foundation";





class UserPage extends Component {


  state = {
    userData: JSON.parse(localStorage.getItem("user")),
  };

  //need get router to get user info
  //need to style page

  componentWillMount() {
    console.log(this.state.userData);
    this.searchSchedule(); //search schedule needs to be equal to team value -> currently only hardcode working if hardcoded on backend
  }

  searchSchedule = (query) => {
    API.schedule(query)
      .then((res) => {
        let summaries = res.data.summaries;
        this.setState({ matchData: summaries });
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log("RENDER: " + this.state.schedData);
    return (
      <div>
        <div className="grid-container">
          <div className="grid-container">
            <Grid>
              <Cell small={12} large={3}>
                <AboutMe />
              </Cell>
              <Cell small={12} large={4}>
                <Schedule matches={this.state.matchData} />
              </Cell>
              <Cell small={12} large={4}>
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