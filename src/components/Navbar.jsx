import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async () => {
    const {getUser}= getKindeServerSession();
    const user = await getUser()
    return (
        <div className="navbar bg-base-300 ">
            <div className="flex-1">
                <Link href="/" className="ml-4 text-3xl font-medium text-blue-950">First Next App</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-4">
                    <li><Link className="inline-block bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200 mr-2" href="/">Home</Link></li>
                    <li><Link className="inline-block bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200 mr-2" href="/profile">Profile</Link></li>
                    {
                        user? (
                            <li><LogoutLink className="inline-block bg-blue-900 text-white font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200">Log Out</LogoutLink></li>
                        ) : (
                            <li><LoginLink className="inline-block bg-blue-900 text-white font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200">Sign in</LoginLink></li>
                        )
                    }

             
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;