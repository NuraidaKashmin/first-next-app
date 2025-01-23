

import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts()
  

  return (
    <div className="container mx-auto mt-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
      List of Blog Posts
      </h1>

      {!posts ? (
        <p className="text-center text-gray-700">Loading...</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="bg-base-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <Link
                href={`/blog/${post.id}`}
                className="block"
              >
                
                <h2 className="text-xl font-semibold text-blue-900 hover:underline">
                  {post.title}
                </h2>

                
                <p className="text-gray-700 mt-2 line-clamp-2">
                  {post.body}
                </p>

                
                <div className="mt-4">
                  <span className="text-sm font-medium text-blue-950 hover:text-gray-900">
                    Read More →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>







  
  );
}



