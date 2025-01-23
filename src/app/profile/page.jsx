import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function Protected() {
  const {isAuthenticated} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return <div>
    <h1 className="text-8xl font-bold text-blue-900 mb-6 text-center mt-20">Welcome to your profile!</h1>
  </div>;
}
