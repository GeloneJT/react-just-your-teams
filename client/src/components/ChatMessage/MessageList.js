import React from 'react';
import config from '../../config';
import io from 'socket.io-client';
//npm install socket.io-client @material-ui/core @material-ui/icons --save if this isn't working
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//import BottomBar from './BottomBar';
//import './App.css';

class commentField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      content: '',
      name: props.name, //name should be logged in user
      team:props.team, //their team
    };
  }

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    // Load the last 10 messages in the window.
    
    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      //TODO get appropriate team
      //GET request to appropriate db
      
      //filter by ones that have appropriate team
      msgReversed.filter(word => word.team==this.state.team);
      this.setState((state) => ({
        chat: [...state.chat, ...msgReversed],
      }), this.scrollToBottom);

    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('push', (msg) => {
      //check if msg has appropriate team
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }), this.scrollToBottom);
    });
  }

  // Save the message the user is typing in the input field.
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  // not from input, get from API
 /* handleName(event) {
    this.setState({
      name: event.target.value,
      team: event.target.value,
    });
  }*/

  handleSubmit(event) {
    // Prevent the form to reload the current page.
    event.preventDefault();

    // Send the new message to the server.
    this.socket.emit('message', {
      name: this.state.name,
      content: this.state.content,
      team:this.state.team,
    });

    this.setState((state) => {
      // Update the chat with the user's message and remove the current message.
      return {
        chat: [...state.chat, {
          name: state.name,
          content: state.content,
          team:state.team
        }],
        content: '',
      };
    }, this.scrollToBottom);
  }

  // Always make sure the window is scrolled down to the last message.
  /*scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }*/

  render() {
    return (
      <div className="CommentField">
        <Paper id="chat" elevation={3}>
          {this.state.chat.map((el, index) => {
            return (
              <div key={index}>
                <Typography variant="caption" className="name">
                  {el.name+", "+el.team}
                </Typography>
                <Typography variant="body1" className="content">
                  {el.content}
                </Typography>
              </div>
            );
          })}
        </Paper>
        

        <form onSubmit={this.handleSubmit}>
            <label>
              Message
              <input
                value={this.state.content}
                onChange={this.handleContent}
                type="text"
                name="message"
                placeholder="Enter your message"
              />
            </label>
          </form>
      </div>
    );
  }
};

export default commentField;

/*
<BottomBar
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
        />
*/