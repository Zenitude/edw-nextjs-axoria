"use client";

import Card from "@/components/Card/Card";
import getPosts from "@/lib/dataPosts";

export default function Home() {
  const posts = getPosts();
  
  return (
    <main className="main-container">
      <h1 className="text-2xl font-bold m-t-[100px]">Stay up to date with AXORIA</h1>
      <p className="text-zinc-400">Tech news and useful knowledge</p>
      <p className="mt-20 mb-5">Latest articles</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          posts.map((post, index) => (
            <Card 
              key={`${index}-home`}
              datas={post}
            />
        ))}
      </div>

    </main>
  );
}
