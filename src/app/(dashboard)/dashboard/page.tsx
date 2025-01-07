"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [posts] = useState<PostType[]>([]);

  const deletePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Post deleted");
  };
  
  return (
    <main>
      <h1>Dashboard - Your articles</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={`${index}-dashboard`}>
              <Link href={`/post/${post.slug}`}>
                  <h2>{post.title}</h2>
              </Link>
              <div className="buttons">
                <button type="button" onClick={(e) => deletePost(e)}>Delete</button>
                <Link href={`/dashboard/edit/${post.slug}`}>Edit</Link>
              </div>
          </li>
        ))}
      </ul>
      
    </main>
  )
}
