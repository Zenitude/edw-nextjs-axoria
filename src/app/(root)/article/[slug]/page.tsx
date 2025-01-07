import Image from "next/image";

export default function Article({params: {slug}} : {params: {slug: string}}) {
  const data = {
    title: "title", 
    imageUrl: "imageUrl", 
    tags: ["tag1", "tag2"], 
    post: "post",
    author: "author"
  }
  console.log(slug)
  return (
    <main className="flex-grow bg-neutral-100">
      <h1 className="text-2xl">{data.title}</h1>
      <p>
        By
        <span className="underline">{data.author}</span>
        {
          data.tags.map((tag, index) => (
            <span key={index} className="underline"># {tag}</span>
          ))
        }
      </p>
      <Image 
        src={data.imageUrl} 
        alt={data.title} 
        sizes="
        (max-width: 280px) 280px,
        (max-width: 560px) 560px,
        (max-width: 840px) 840px,
        (max-width: 1120px) 1120px,
        1120px
        "
      />
      <p>{data.post}</p>
    </main>
  )
}
