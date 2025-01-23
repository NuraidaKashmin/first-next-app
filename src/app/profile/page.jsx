import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Protected() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-3xl text-center">
        
        <h1 className="text-6xl font-bold text-blue-900 mb-4">
          Welcome to Your Profile!
        </h1>
        <p className="text-gray-600 text-lg">
          This is your personal profile page. Explore your account details, manage your settings, or just enjoy being logged in.
        </p>
        <div className="mt-8">
          
          <Link className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-200" href="/">View Account Details</Link>
          <Link className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-300 transition duration-200 ml-4" href="/">Edit Profile</Link>

        </div>
      </div>
    </div>
  );
}


