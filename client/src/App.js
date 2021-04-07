import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./pages/Landing/Landing";
// import CreateAccount from "./pages/CreateAccount/CreateAccount";
import TeamSearch from "./pages/TeamSearch/TeamSearch";
// import Nav from "./components/Nav";


class App extends React.Component {
  render() {
    return (
        <div>
            <TeamSearch /> 
             
        </div>
    );
  }
}

export default App;
