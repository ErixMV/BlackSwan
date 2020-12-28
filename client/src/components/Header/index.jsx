import { React } from 'react';
import "./header.css";


const Header = () => {
    return (
        <div className="outer-header">
            <header className="header" style={{ width: "60%", margin: "auto", paddingBottom: "10px"}}>
                <img className="logo" src="/images/swan.png" alt="swan"/><span id="title"> THE BLACK SWAN</span>
            </header>
        </div>
    )
}

export default Header;