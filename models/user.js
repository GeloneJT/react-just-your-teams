const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

//creates model - id field is automatically added as _id property
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    unique: true,
  },
  about_me: {
    type: String,
    trim: true,
    trim: true,
  },
  sport: {
    type: String,
    required: true,
    trim: true,
  },
  league: {
    type: String,
    required: true,
    trim: true,
  },
  team: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
  },
});

//uses bcrypt to hash the password
UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

UserSchema.pre("save", function (next) {
  console.log("userSchema.pre('save'): ", this);
  if (!this.password) {
    console.log("no password!");
    next();
  } else {
    console.log("pre saved");
    this.password = this.hashPassword(this.password);
  }
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
