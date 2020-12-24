import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="outer-nav">
            <nav className="nav">
                <ul>
                    <li className="nav-item"><Link to="/" className="custom-btn btn-type1 type1">
                            Home
                        </Link></li>
                    <li className="nav-item"><Link to="/recomendation" className="custom-btn btn-type1 type1">
                            Recomendations
                        </Link></li>
                    <li className="nav-item"><Link to="/about" className="custom-btn btn-type1 type1">
                            About Us
                        </Link></li>
                    {/* <li className="nav-item"><a className="button" href="#3">About Us</a></li> */}
                    {/* <li className="nav-item"><a className="button" href="#4">Help</a></li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;