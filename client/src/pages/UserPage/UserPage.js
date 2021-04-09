import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import ScheduleResults from "../../components/ScheduleResults";

class UserPage extends Component {
  state = {
    teamId: null,
    team: "",
    results: []
  };

  componentDidMount() {
    this.searchTeam('48');
  }

  searchTeam = (query) => {
    API.schedule(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <section>
        <AboutMe /> 
        <ScheduleResults results={this.state.results} />
      </section>
    );
  }
}

export default UserPage;