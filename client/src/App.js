import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import TeamSearch from "./pages/TeamSearch/TeamSearch";
import UserPage from "./pages/UserPage/UserPage";
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
          <Route exact path="/react-just-your-teams" component={Landing} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/teamsearch" component={TeamSearch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
