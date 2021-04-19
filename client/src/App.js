import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import UserPage from "./pages/UserPage/UserPage";
import Nav from "./components/Nav";
import ChatPage from "./pages/ChatPage/chatpage.js";
import Footer from "./components/Footer";



class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/createaccount">
              <CreateAccount />
            </Route>
            <Route exact path="/userpage">
              <UserPage />
            </Route>
            <Route exact path="/chatpage">
              <ChatPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
