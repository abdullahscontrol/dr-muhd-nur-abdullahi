import { Link } from "react-router-dom"
export default function Navar(){
    return <div className="navbar">
        <div className="image">
        </div>
        <div className="links">
            <Link to='/about' className="signlink">About</Link>
            <Link to='/publication' className="signlink">Publication</Link>

        </div>
    </div>
}