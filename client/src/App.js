import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import UserPage from "./pages/UserPage/UserPage"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import dotenv from "dotenv";

dotenv.config();


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = "/">
              <Landing />
            </Route>
            <Route exact path = "/createaccount">
              <CreateAccount />
            </Route>
            <Router exact path = "/userpage/:id">
              <UserPage />
            </Router>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
