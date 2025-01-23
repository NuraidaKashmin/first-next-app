import getPost from "@/lib/getPost";
import Link from "next/link";


 


export default async function BlogPage({params}){
    const {id} = params;
    const post = await getPost(id)


    return (
        <div className="container mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg text-gray-600 mb-2">
          Blog ID: <span className="font-medium">{post.id}</span>
        </p>
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{post.title}</h1>
        <hr className="my-4 border-gray-300" />
        <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
      </div>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-block bg-blue-900 text-white font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
        >
          ← Back to Blog List
        </Link>
      </div>
    </div>
    );
};

