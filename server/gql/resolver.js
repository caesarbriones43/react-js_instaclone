const userController = require("../controllers/user");

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
    register: async (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
  },
};

module.exports = resolvers;
