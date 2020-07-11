import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

require("dotenv").config();

const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;
if (uri) {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

mongoose.connection.once("open", () =>
  console.log("Database connection established successfully!")
);
mongoose.connection.on("error", (error) => console.error(error));

/*
const server = ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`))
  .catch((error) => console.error(error));
*/
