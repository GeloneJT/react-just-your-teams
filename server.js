const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const Logger = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();
const io = require('socket.io')();

app.use(Logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "super secret",
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/jytDB" }),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jytDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});



  io.on('connection', (socket) => {

    // Get the last 10 messages from the database.
    Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
      if (err) return console.error(err);
  
      // Send the last messages to the user.
      socket.emit('init', messages);
    });
  
    // Listen to connected users for a new message.
    socket.on('message', (msg) => {
      // Create a message with the content and the name of the user.
      const message = new Message({
        content: msg.content,
        name: msg.name,
        team:msg.team,
      });
  
      // Save the message to the database.
      message.save((err) => {
        if (err) return console.error(err);
      });
  
      // Notify all other users about a new message.
      //socket.broadcast.emit('push', msg);
    });
  });

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
