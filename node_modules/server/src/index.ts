// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Forums from "./routes/forums";
import auth, { authenticateUser } from "./routes/auth";
import fs from "node:fs/promises";

import path from "path";

const app = express();
const port = Number(process.env.PORT) || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir)); 
app.use(express.json());
app.use("/auth", auth);
app.use("/api/forums", authenticateUser, Forums);


app.use("/app", (req, res) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

connect("forumdb");
