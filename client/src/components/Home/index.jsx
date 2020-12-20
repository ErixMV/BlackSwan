import "./home.css"

const Home = () => {
    return (
        <div className="outer-home">
            <div className="home-header">
                <span className="home-title">
                    Por y para los amantes de los libros
                </span>
            </div>
            <main className="home">
                <div className="main-l">
                    Left ahead
                </div>
                <div className="main-r">
                    Right
                </div>
            </main>
        </div>
    );
};

export default Home;