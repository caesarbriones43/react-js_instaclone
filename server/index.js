const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const colors = require("colors");

const resolvers = require("./gql/resolver");
const { typeDefs } = require("./gql/schema");

require("dotenv").config({ path: ".env" });

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log("Error de conexion!".red);
    } else {
      runServer();
    }
  }
);

const runServer = () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`.cyan);
  });
};
