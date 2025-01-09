//import Image from "next/image";
import getPost from "@/lib/serverMethods/blog/postMethods";
import Link from "next/link";

export default async function Article({params: { slug }} : {params: {slug: string}}) {
  const post = await getPost(slug);
  
  return (
    <main className="flex-grow bg-neutral-100 pt-[70px]">
      <h1 className="text-2xl">{post.title}</h1>
      <p className="flex gap-3">
        By
        <Link href={`/author/${post.author}`} className="underline">{post.author}</Link>
        {
          post.tags.map((tag: string, index: number) => (
            <Link key={index} href={`/categories/${post.slug}`} className="underline"># {tag}</Link>
          ))
        }
      </p>
      {/* <Image 
        src={data.imageUrl} 
        alt={data.title} 
        sizes="
        (max-width: 280px) 280px,
        (max-width: 560px) 560px,
        (max-width: 840px) 840px,
        (max-width: 1120px) 1120px,
        1120px
        "
      /> */}
      <p>{post.markdownArticle}</p>
    </main>
  )
}