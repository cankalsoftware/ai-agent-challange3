// This the the convex database connection file.
// It defines the schema for the database.
// The schema is used to create the database tables.
// The schema is used to validate the data that is stored in the database.
// The schema is used to generate the API for the database.

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    videos: defineTable({
        userId: v.id("users"),
        videoId: v.string(),
    })
    .index("by_user_id", ["userId"])
    .index("by_video_id", ["videoId"])
    .index("by_user_and_video", ["userId", "videoId"]),

    transcript: defineTable({
        videoId: v.string(),
        userId: v.string(),
        transcript: v.array(v.object({
            text: v.string(),
            timestamp: v.number(),
        })),
    })
    .index("by_user_id", ["userId"])
    .index("by_video_id", ["videoId"])
    .index("by_user_and_video", ["userId", "videoId"]),

    images: defineTable({
        storageId: v.id("_storage"),
        userId: v.string(),
        videoId: v.string(),
    })
    .index("by_user_id", ["userId"])
    .index("by_video_id", ["videoId"])
    .index("by_user_and_video", ["userId", "videoId"]),

    titles: defineTable({
        videoId: v.string(),
        userId: v.string(),
        title: v.string(),
    })
    .index("by_user_id", ["userId"])
    .index("by_video_id", ["videoId"])
    .index("by_user_and_video", ["userId", "videoId"]),
})

