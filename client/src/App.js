import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./pages/Landing/Landing";
// import CreateAccount from "./pages/CreateAccount/CreateAccount";
// import TeamSearch from "./pages/TeamSearch/TeamSearch";
import UserPage from "./pages/UserPage/UserPage";



class App extends React.Component {
  render() {
    return (
        <div>
            <UserPage /> 
             
        </div>
    );
  }
}

export default App;
