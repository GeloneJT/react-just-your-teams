import React, { Component } from "react";
import API from "../../utils/API";
import AboutMe from "../../components/AboutMe";
import ScheduleResults from "../../components/ScheduleResults";

class UserPage extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchTeam('48');
  }

  searchTeam = (query) => {
    console.log("SEARCHTEAM: " + query);
    API.schedule(query)
      .then((res) => 
      {
        console.log(res) 
        this.setState({ results: res.data.schedule })
      }
      )
      .catch((err) => console.log(err));
  };
  
  render() {
    console.log("RENDER: " + this.state.results.schedule)
    return (
      <div>
        <AboutMe /> 
        <ScheduleResults schedule={this.state.results} />
      </div>
    );
  }
}

export default UserPage;