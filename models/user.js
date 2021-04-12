const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

//creates model - id field is automatically added as _id property
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
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
userSchema.pre("save", async function (next) {
  console.log("userSchema.pre: ", this);
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
