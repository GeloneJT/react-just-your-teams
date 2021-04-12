import React from "react";
//import "./Landing.css";
import MessageList from "../../components/ChatMessage/MessageList"



class ChatPage extends React.Component {

    render() {
      return (
        <div className="ChatPage">
          <div className="showcase">
            <div className="grid-container">
              <div className="grid-x grid-margin-x align-center">
                <MessageList />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ChatPage;

