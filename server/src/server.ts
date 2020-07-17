import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

/*
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


const graphQLServer = ApolloServer({
  typeDefs,
  resolvers,
});
*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`);
});
