import { useState } from "react";
import Card from "@/components/Card/Card";

export default function Author({params: {slug}} : {params: {slug: string}}) {
  const [ posts ] = useState<PostType[]>([]);

  return (
    <main className="flex-grow bg-neutral-100">
      <h1 className="text-2xl">Posts from {slug}</h1>
      <p>All of the posts that uses that tag</p>
      <p>Latest articles</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          posts.map((post, index) => (
            <Card 
              key={`${index}-${slug}`}
              datas={post}
            />
        ))}
      </div>

    </main>
  )
}
