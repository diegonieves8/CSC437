"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var forForum_svc_exports = {};
__export(forForum_svc_exports, {
  default: () => forForum_svc_default
});
module.exports = __toCommonJS(forForum_svc_exports);
var import_mongoose = require("mongoose");
const ForumSchema = new import_mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    user: { type: String, required: true, trim: true },
    replies: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: "forums" }
);
const ForumModel = (0, import_mongoose.model)("ForumPost", ForumSchema);
function index() {
  return ForumModel.find();
}
function get(title) {
  return ForumModel.find({ title }).then((list) => list[0]).catch((err) => {
    throw new Error(`${title} Not Found`);
  });
}
var forForum_svc_default = { index, get };
