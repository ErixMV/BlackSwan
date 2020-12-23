import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import styled from 'styled-components';
import Media from 'react-media';

import "./home.css"

// const CustomBtn = styled(Button)`
//     text-decoration: none;
//     color: #99521c !important;
//     transition: all .5s;
//     &:hover{
//         background: #99521c !important;
//     }
// `

const Home = () => {
    return (
        <div className="outer-home">
            <div className="home-header">
                <span className="home-title">
                    Get customized recommendations
                </span>
            </div>
            <main className="home">
                <div className="main-l ">
                    <img src="/images/home1.jpg" className="img-home" alt="library with a lot of lamps" />
                </div>
                <div className="main-r">
                    <div className="block-header"><span>How does it work?</span></div>
                    <div className="home-content">
                        <p>Get your very own recommendations from a large database. It's simple: you choose one book that you like, 
                           and we will show you books that you're likely to enjoy aswell.</p>
                    </div>
                    <div className="c-link-rec">
                        <Link to="/recomendation" className="button2">Get started</Link>
                        {/* <Link to="/recomendation" className="home_to_recomendations"><CustomBtn variant="outlined" color="secondary">hola</CustomBtn></Link> */}
                    </div>
                </div>
            </main>
            <article className="content-block">
                <div className="article-header">
                    Our recommendations
                </div>
                <div className="books-row">
                    <div>
                        <img src="/images/books/thedavincicode.jpg" className="book-cover" alt="" />
                    </div>
                    <div>
                        <img src="/images/books/wildanimus.jpg" className="book-cover" alt="" />
                    </div>

                    <Media query="(max-width:1200px)" render={() => (<div class="break"></div>)} />

                    <div>
                        <img src="/images/books/apaintedhouse.jpg" className="book-cover" alt="" />
                    </div>
                    <div>
                        <img src="/images/books/theredtent.jpg" className="book-cover" alt="" />
                    </div>
                    {/* <img src="/images/books/thelovelybonesanovel.jpg" className="book-cover" alt=""/> */}
                </div>
                <div className="article-footer c-link-rec">
                    <Link to="/recomendation" className="button2">hola</Link>
                </div>
            </article>
        </div>
    );
};

export default Home;