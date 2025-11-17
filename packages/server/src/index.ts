// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo"
import Forums from "./routes/forums";
import auth, { authenticateUser } from "./routes/auth";

const app = express();
const port = Number(process.env.PORT) || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));
app.use(express.json());
app.use("/auth", auth);


app.use("/api/forums", authenticateUser, Forums);

//Test Route
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});


connect("forumdb");
