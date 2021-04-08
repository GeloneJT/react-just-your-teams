import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import ScheduleResults from "../../components/ScheduleResults";

class UserPage extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchTeam=({"Everton": 48});
  };

  searchTeam = query => {
    API.schedule(query)
    .then(rest => this.setState({ results: rest.data.data}))
    .catch(err => console.log(err));
  }
    render() {
        return (
          <section>
                  <AboutMe />
                  <ScheduleResults />
          </section>
        );
    }
}

export default UserPage;