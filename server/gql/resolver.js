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
    register: (_, { input }) => {
      console.log("Registrando usuario...");
      console.log(input);
      return null;
    },
  },
};

module.exports = resolvers;
