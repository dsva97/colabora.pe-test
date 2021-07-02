import mongoose from "mongoose";
import { config } from "../config";

const { MONGO_HOST, MONGO_PORT, MONGO_NAME, MONGO_USER, MONGO_PASS } = config;

const URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin&retryWrites=true&w=majority`;

console.log(URI);

export const connectionDB = () =>
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((db) =>
      console.log("Successfull connection to DB " + db.connection.host)
    )
    .catch(console.error);
