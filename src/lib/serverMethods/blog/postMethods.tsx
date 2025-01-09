import { connectToDb } from "@/lib/utils/db/connectDb";
import Post from "@/lib/models/Post";

export default async function getPost(slug: string) {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch(error) {
    console.log("Error while fetch a post : ", error);
  }
}

