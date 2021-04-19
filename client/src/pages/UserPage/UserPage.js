import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import Schedule from "../../components/Schedule";
import Results from "../../components/Results"; 
import { Grid, Cell } from "react-foundation";





class UserPage extends Component {
  state = {
    userData: JSON.parse(localStorage.getItem("user")),
    matchData: [],
  };

  //need get router to get user info
  //need to style page

  componentWillMount() {
    this.setState({ userData: JSON.parse(localStorage.getItem("user")) });
    console.log(this.state.userData);
    this.searchSchedule(this.state.userData.team);
  }

  searchSchedule = (team) => {
    const PLteamkeys = {
      "Arsenal FC": 42,
      "Aston Villa FC": 40,
      "Brighton & Hove Albion FC": 30,
      "Burnley FC": 6,
      "Chelsea FC": 38,
      "Crystal Palace FC": 7,
      "Everton FC": 48,
      "Fulham FC": 43,
      "Leeds United": 34,
      "Leicester City FC": 31,
      "Liverpool FC": 44,
      "Manchester City FC": 17,
      "Manchester United FC": 35,
      "Newcastle United FC": 39,
      "Sheffield United FC": 15,
      "Southampton FC": 45,
      "Tottenham Hotspur FC": 33,
      "West Bromwich Albion": 8,
      "West Ham United FC": 37,
      "Wolverhampton Wanderers FC": 3,
    };
    const query = PLteamkeys[team];
    console.log("BEFORE API CALL: " + query);
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
                <AboutMe aboutme={this.state.userData.about_me} username={this.state.userData.username} />
              </Cell>
              <Cell small={12}>
                <Schedule matches={this.state.matchData} />
              </Cell>
              <Cell small={12}>
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