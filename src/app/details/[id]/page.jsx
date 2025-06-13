// app/details/[id]/page.jsx

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);

  useEffect(() => {
    fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setPost(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!post) return <div className="p-10 text-center">Post not found</div>;

  return (
    <>
      <Header />
      <div className="w-full mx-auto px-4 py-10">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-6"
        />
        <div className="max-w-7xl mx-auto px-4 py-10">
          <span className="text-lg bg-black font-medium text-white px-3 py-1 rounded-full inline-block mb-4 animate-slide-up">
            {post.prompt}
          </span>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 whitespace-pre-line font-medium text-lg md:text-2xl leading-relaxed animate-slide-up">
            {post.content}
          </p>
        </div>
      </div>
    </>
  );
}
