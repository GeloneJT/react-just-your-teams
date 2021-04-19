import React from "react";
//import "./Landing.css";
import MessageList from "../../components/ChatMessage/MessageList"



class ChatPage extends React.Component {

    render() {
      var team = localStorage.getItem("team")
      var name = localStorage.getItem("name")
      return (
        <div className="ChatPage">
          <div className="showcase">
            <div className="grid-container">
              <div className="grid-x grid-margin-x align-center">
                <MessageList name={name} team={team} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ChatPage;

