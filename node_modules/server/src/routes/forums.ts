import express, { Request, Response } from "express";
import { ForumPost } from "../models/forForum";

import Forums from "../services/forForum-svc";

const router = express.Router();

// GET all forum posts
router.get("/", (_, res: Response) => {
  Forums.index()
    .then((list: ForumPost[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

// GET one forum post by title
router.get("/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Forums.get(title)
    .then((post: ForumPost) => res.json(post))
    .catch((err) => res.status(404).send(err));
});

//by user
router.get("/user/:user", (req: Request, res: Response) => {
  const { user } = req.params;

  Forums.getByUser(user)
    .then((posts: ForumPost[]) => res.json(posts))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newPost = req.body;

  Forums.create(newPost)
    .then((post: ForumPost) => res.status(201).json(post))
    .catch((err: any) => res.status(500).send(err));
});

router.put("/:title", (req: Request, res: Response) => {
  const { title } = req.params;
  const updatedForum = req.body;

  Forums.update(title, updatedForum)
    .then((forum) => res.json(forum))
    .catch((err) => res.status(404).json({ error: err }));
});

router.delete("/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Forums.remove(title)
    .then(() => res.status(204).end()) // 204 = No Content
    .catch((err) => res.status(404).send(err));
});


export default router;


