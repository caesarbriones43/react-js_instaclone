var bcryptjs = require("bcryptjs");
const User = require("../models/user");

const resolvers = {
  Query: {
    //User
    getUser: () => {
      console.log("User...");
      return null;
    },
  },
  Mutation: {
    //User
    register: async (_, { input }) => {
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

      //Encriptar

      const salt = await bcryptjs.genSaltSync(10);
      newUser.password = await bcryptjs.hash(password, salt);

      try {
        const user = new User(newUser);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }

      return newUser;
    },
  },
};

module.exports = resolvers;
