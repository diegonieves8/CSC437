// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo"
import Forums from "./routes/forums";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));
app.use(express.json());


app.use("/api/forums", Forums);

//Test Route
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connect("forumdb");
