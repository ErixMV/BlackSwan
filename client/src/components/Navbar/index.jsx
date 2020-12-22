import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="outer-nav">
            <nav className="nav">
                <ul>
                    <li className="nav-item"><Link to="/"  className="button">Home</Link></li>
                    <li className="nav-item"><Link to="/recomendation" className="button">Recomendations</Link></li>
                    <li className="nav-item"><Link to="/about" className="button">About us</Link></li>
                    {/* <li className="nav-item"><a className="button" href="#3">About Us</a></li> */}
                    {/* <li className="nav-item"><a className="button" href="#4">Help</a></li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;