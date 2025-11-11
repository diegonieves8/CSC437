// src/services/forForum-svc.ts
import { Schema, model } from "mongoose";
import { ForumPost } from "../models/forForum";

//Schema
const ForumSchema = new Schema<ForumPost>(
  {
    title: { type: String, required: true, trim: true },
    user: { type: String, required: true, trim: true },
    replies: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { collection: "forums" } 
);

// Create  Mongoose model
const ForumModel = model<ForumPost>("ForumPost", ForumSchema);


// Return all forum posts
function index(): Promise<ForumPost[]> {
  return ForumModel.find();
}

// Return a specific post by title (or id if you prefer)
function get(title: String): Promise<ForumPost> {
  return ForumModel.findOne({ title })
    .then((post) => {
      if (!post) throw new Error(`${title} Not Found`);
      return post;
    });
}


//By user
function getByUser(user: String): Promise<ForumPost[]> {
  return ForumModel.find({ user })
    .then((posts) => posts)
    .catch((err) => {
      throw `No posts found for user ${user}: ${err}`;
    });
}


//post
function create(json: ForumPost): Promise<ForumPost> {
  const post = new ForumModel(json);
  return post.save();
}

//put
function update(title: string, updatedForum: ForumPost): Promise<ForumPost> {
  return ForumModel.findOneAndUpdate({ title }, updatedForum, { new: true })
    .then((updated) => {
      if (!updated) throw `${title} not updated`;
      else return updated as ForumPost;
    });
}

//delete
function remove(title: String): Promise<void> {
  return ForumModel.findOneAndDelete({ title }).then((deleted) => {
    if (!deleted) throw `${title} not deleted`;
  });
}


export default { index, get, getByUser, create, update, remove };
