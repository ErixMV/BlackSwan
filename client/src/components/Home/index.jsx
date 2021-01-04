import "./home.sass";


import { ReactComponent as Reader } from "assets/reader.svg";
import { ReactComponent as Book1 } from "assets/book1.svg";
import { ReactComponent as Book } from "assets/book2.svg";
import { ReactComponent as Book3 } from "assets/book3.svg";
import { ReactComponent as Book4 } from "assets/book4.svg";
import { ReactComponent as Rating } from "assets/rating.svg";
import { Button } from 'components/common/Button/Button';

export const Home = () => {
    return (
        <main className="section" id="home">
            <div className="block-content w-65" style={{ textAlign: "center" }}>
                <div className="section-title-container" style={{ margin: "0px auto 40px" }}>
                    <h2 className="section-title">Looking for your new favourite book</h2>
                </div>
                <div className="subtitle">
                    <h3>Start a new adventure!</h3>
                </div>
                <div className="flex-svgs">
                    <Book4/>
                    <Book3/>
                </div>
            </div>
            <div className="block-content w-65 discover">
                <div className="section-title-container">
                    <h2 className="section-title">Discover interesting books</h2>
                </div>
                <div className="discover-content">
                    <div className="discover-text">
                        <p>
                            Get your own recommendations from a large database of books of various genres. It's simple: you choose one book that you like,
                            and we will show you books that you're likely to enjoy aswell.
                        </p>
                    </div>
                    <div className="discover-image">
                        <Book1 />
                    </div>
                </div>
            </div>
            <div className="block-content w-65 how-it-works">
                <div className="section-title-container">
                    <h2 className="section-title">How does it works</h2>
                </div>
                <div className="how-content">
                    <div className="how-text">
                        Our book recommendation system is based on the analysis of book ratings made by various users.
                    </div>
                    <div className="numbers-data">
                        <div className="number">
                            <div>
                                <Book className="icon-data" />
                            </div>
                            <div className="data">
                                271.379 books
                            </div>
                        </div>
                        <div className="number">
                            <div>
                                <Reader className="icon-data" />
                            </div>
                            <div className="data">278.858 users</div>
                        </div>
                        <div className="number">
                            <div>
                                <Rating className="icon-data" />
                            </div>
                            <div className="data">1.149.780 ratings</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-content t-center">
                <Button to="/recomendation" text="Get started" />
            </div>
        </main>
    );
};