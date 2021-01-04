import "./navbar.sass";

import { Button } from '../common/Button/Button';
// import { BurgerMenu } from './Menu';

export const Navbar = () => {
    return (
        <nav id="nav">
            <div className="inner-nav">
                <ul>
                    <li className="nav-item"><Button to="/" text="Home" /></li>
                    <li className="nav-item"><Button to="/recomendation" text="Recomendations" /></li>
                    <li className="nav-item"><Button to="/about" text="About Us" /></li>
                </ul>
            </div>
            {/* <BurgerMenu/> */}
        </nav>
    );
};