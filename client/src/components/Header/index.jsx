import "./header.sass";

export const Header = () => {
    return (
        <header id="header">
            <div className="inner-header">
                <div className="logo-title">
                    <img className="logo" src="/images/swan.png" alt="swan" />
                    <span id="title"> THE BLACK SWAN</span>
                </div>
            </div>
        </header>
    );
};