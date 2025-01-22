import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">First Next App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="text-lg font-bold" href="/">Home</Link></li>
                    <li><Link className="text-lg font-bold" href="/profile">Profile</Link></li>
                    <li><Link className="text-lg font-bold" href="/">Login</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;