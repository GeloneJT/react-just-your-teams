import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./pages/Landing/Landing";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";


class App extends React.Component {
  render() {
    return (
        <div>
            <CreateAccount /> 
             
        </div>
    );
  }
}

export default App;
