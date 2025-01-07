export default function getPosts () {
  const posts = [
    {
      title: "Emmet 101 XXX ZZZ",
      slug: "emmet-101-xxx-zzz",
      content: "Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow",
      tags: ["emmet"],
      imageUrl: "",
      date: "2024-12-28",
      author: "Victor Dupont"
    },
    {
      title: "Master SEO with Next.js",
      slug: "master-seo-with-nextjs",
      content: "Next.js is a great framework to build SEO friendly applications",
      tags: ["nextjs", "seo"],
      imageUrl: "",
      date: "2024-12-28",
      author: "Victor Dupont"
    }
  ];

  return posts;
}