import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'


export default defineSchema({
    users: defineTable({
        username: v.string(),
        fullname: v.string(),
        email: v.string(),
        bio: v.optional(v.string()),
        image: v.string(),
        followers: v.number(),
        following: v.string(),
        posts: v.number(),
        clerkId: v.string()
    }).index("by_clerk_id", ["clerkId"]),

    posts: defineTable({
        userId: v.id('users'),
        imageUrl: v.string(),
        storageId: v.id("_storage"),
        caption: v.optional(v.string()),
        likes: v.number(),
        comments: v.number(),
    }).index("by_user", ["userId"]),

    comments: defineTable({
        userId: v.id("users"),
        postId: v.id("posts"),
        contetnt: v.string(),
    }).index("by_post", ["postId"]),

    likes: defineTable({
        postId: v.id("posts"),
        userId: v.id('users')
    }).index("by_post", ["postId"])
        .index("by_user_and_post", ["userId", "postId"]),

    follows: defineTable({
        followerId: v.string(),
        followingId: v.string(),
    }).index("by_follower", ["followerId"])
        .index("by_following", ["followingId"])
        .index("by_both", ['followerId', 'followingId']),


    notifications: defineTable({
        receiverId: v.string(),
        senderId: v.string(),
        type: v.union(v.literal("like"), v.literal("comment"), v.literal("follow")),
        postId: v.optional(v.id("posts")),
        commentId: v.optional(v.id("comments"))
    }).index("by_receiver", ['receiverId']),

    bookmarks: defineTable({
        userId: v.id('users'),
        postId: v.id('posts')
    }).index("by_user", ["userId"])
        .index("by_post", ['postId'])
        .index("by_user_and_post", ["userId", "postId"])

})