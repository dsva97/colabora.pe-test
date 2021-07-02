import express from "express";
import { connectionDB } from "./models/connection";
import path from "path";
import { config } from "./config";
import { router } from "./routes";

connectionDB();

const app = express();

app.use(express.static(config.FRONTEND_DIST_PATH));

app.use("/api", router);

app.get("*", (_req, res) => {
  if (config.NODE_ENV === "production") {
    res
      .status(200)
      .sendFile(path.resolve(config.FRONTEND_DIST_PATH, "index.html"));
  } else {
    res.status(400).send("Not Found");
  }
});

app.listen(config.PORT, () =>
  console.log(`Server running in port ${config.PORT}.`)
);
