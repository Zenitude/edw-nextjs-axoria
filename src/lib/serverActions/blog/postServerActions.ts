"use server";

import { connectToDb } from "@/lib/utils/db/connectDb";
import Post from "@/lib/models/Post";

export async function addPost(formData: FormData) {
  const title = formData.get("title") as string;
  const markdownArticle = formData.get("markdownArticle") as string;
  const tags_count = formData.get("tags_count") as string;
  let tags: string[] = [];

  for(let i = 1; i <= parseInt(tags_count); i++) {
    tags = [...tags, formData.get(`tag-${i}`) as string];
  }

  try {
    await connectToDb();

    const newPost = new Post({
      title,
      markdownArticle,
      tags
    });

    const savedPost = await newPost.save();
    console.log("Post saved");

    return { success : true, slug: savedPost.slug};
  } catch(error) {
    console.log("Error while creating the post : ", error);
  }
}