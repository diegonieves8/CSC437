// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo"
import Forums from "./services/forForum-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

//Test Route
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

//Get all forum posts
app.get("/forums", (req: Request, res: Response) => {
  Forums.index()
    .then((data) => {
      res
        .set("Content-Type", "application/json")
        .send(JSON.stringify(data));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server Error");
    });
});

app.get("/forums/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Forums.get(title).then((data) => {
    if (data)
      res
        .set("Content-Type", "application/json")
        .send(JSON.stringify(data));
    else res.status(404).send("Post not found");
  });
});


//Get one forum post by title

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connect("blazing");