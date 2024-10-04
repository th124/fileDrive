import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const fileTypes = v.union(
  v.literal("image"),
  v.literal("csv"),
  v.literal("pdf"),
  v.literal("docx"),
  v.literal("doc"),
  v.literal("xls"),
  v.literal("xlsx"),
  v.literal("ppt"),
  v.literal("pptx"),
  v.literal("mp3"),
  v.literal("mp4"),
  v.literal("mpg"),
  v.literal("png"),
  v.literal("jpg"),
  v.literal("jpeg"),
  v.literal("gif"),
  v.literal("bmp"),
  v.literal("svg"),
  v.literal("txt"),
  v.literal("pdf"),
  v.literal("docx"),
  v.literal("doc"),
  v.literal("xls"),
  v.literal("xlsx"),
  v.literal("ppt"),
  v.literal("pptx"),
  v.literal("mp3"),
  v.literal("mp4"),
);
export const roles = v.union(v.literal("admin"), v.literal("member"));
export default defineSchema({
  files: defineTable({
    name: v.string(),
    type: fileTypes,
    orgId: v.string(),
    fileId: v.id("_storage"),
    userId: v.id("users"),
    shouldDelete: v.optional(v.boolean()),
  })
    .index("by_orgId", ["orgId"])
    .index("by_shouldDelete", ["shouldDelete"]),
  favorites: defineTable({
    fileId: v.id("files"),
    orgId: v.string(),
    userId: v.id("users"),
  }).index("by_userId_orgId_fileId", ["userId", "orgId", "fileId"]),
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    orgIds: v.array(
      v.object({
        orgId: v.string(),
        role: roles,
      })
    ),
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),
});