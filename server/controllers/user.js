const bcryptjs = require("bcryptjs");
const User = require("../models/user");

async function register(input) {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();
  console.log(newUser);

  const { email, username, password } = newUser;

  //Validation e-mail
  const foundEmail = await User.findOne({ email });
  console.log(foundEmail);
  if (foundEmail) throw new Error("Email already in use");

  //Validation username
  const foundUsername = await User.findOne({ email });
  console.log(foundUsername);
  if (foundUsername) throw new Error("Username already in use");

  //Encriptar password
  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);

  try {
    const user = new User(newUser);
    user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function login(input) {
  const { email, password } = input;
  console.log("Email", email);
  console.log("Password", password);
}

module.exports = {
  register,
  login,
};
