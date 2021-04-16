const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
        //Executes on sign in attempt
      console.log(
        "Passport callback for auth - email, password",
        email,
        password
      );
      db.User.findOne(
        {
          email: email,
        },
        (err, dbUser) => {
          if (err) {
            return done(err);
          }
          // No email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email.",
            });
            // User with email entered exists but password is incorrect
          } else if (!dbUser.checkPassword(password)) {
            return done(null, false, {
              message: "Incorrect password.",
            });
          }
          //If none of the above, return the user
          return done(null, dbUser);
        }
      );
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log("passport.seralizeUser - user: ", user);
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  console.log("passport.deseralizeUser - obj: ", obj);
  cb(null, obj);
});
module.exports = passport;
