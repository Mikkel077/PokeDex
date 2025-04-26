import {Link} from "react-router";

export default function NavBar() {
    return (
        <div className="navbar bg-linear-to-r from-blue-950 to-blue-700 shadow-sm fixed top-0 left-0 w-full z-50 mb-5">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Home</Link>
            </div>
            <div className="flex-1">
                <Link to="/About" className="btn btn-ghost text-xl">About</Link>
            </div>
        </div>
    )
}