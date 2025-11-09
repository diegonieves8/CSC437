// src/services/forForum-svc.ts
import { Schema, model } from "mongoose";
import { ForumPost } from "../models/forForum";

// Define Mongo schema for Forum posts
const ForumSchema = new Schema<ForumPost>(
  {
    title: { type: String, required: true, trim: true },
    user: { type: String, required: true, trim: true },
    replies: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: "forums" } 
);

// Create the Mongoose model
const ForumModel = model<ForumPost>("ForumPost", ForumSchema);


// Return all forum posts
function index(): Promise<ForumPost[]> {
  return ForumModel.find();
}

// Return a specific post by title (or id if you prefer)
function get(title: String): Promise<ForumPost> {
  return ForumModel.find({ title })
    .then((list) => list[0])
    .catch((err) => {
      throw new Error(`${title} Not Found`);
    });
}

// Export a default object with all service functions
export default { index, get };
