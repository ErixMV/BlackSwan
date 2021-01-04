import "./header.sass";

// import Media from 'react-media';
// import { BurgerMenu } from 'components/Navbar/Menu';

export const Header = () => {
    return (
        <header id="header">
            <div className="inner-header">
                <div className="logo-title">
                    <img className="logo" src="/images/swan.png" alt="swan" />
                    <span id="title"> THE BLACK SWAN</span>
                </div>
                {/* <Media query="(max-width:600px)" render={() => (<BurgerMenu />)} /> */}
            </div>
        </header>
    );
};