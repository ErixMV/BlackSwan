import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import styled from 'styled-components';

import {ReactComponent as Book1} from "../../assets/book1.svg"
// import BootstrapCarousel from "./Carousel"

import "./home.css"

import { ReactComponent as Reader } from "../../assets/reader.svg"
import { ReactComponent as Book } from "../../assets/book2.svg"
import { ReactComponent as Rating } from "../../assets/rating.svg"

const Home = () => {
    return (
        <div className="section home">
            {/* <div style={{ backgroundImage: 'url(/images/home/home1.jpg)', height: "80vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center center", color: "#eee" }} className="testings"> */}
            <div className="leftside block-content" style={{ width: "100%", background: "#F0F1F4", padding: "20px 0px 40px" }}>
                <div className="outer-section-title" style={{ textAlign: "center" }}>
                    <h2 className="section-title" style={{ lineHeight: "2", margin: "auto" }}>Looking for your new favourite book</h2>
                </div>
                <div>
                    <h3 style={{ marginTop: "30px" }}>Start a new adventure!</h3>
                </div>
                <div style={{ marginTop: "50px" }}>
                    <svg style={{ margin: "0px 40px" }} id="Layer_1" height="512" viewBox="0 0 511.168 511.168" width="512"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <path d="m16.696 96.479h385.635v107.293h-385.635z" fill="#ffda45" />
                            </g>
                            <path d="m359.331 96.479h43v107.293h-43z" fill="#fac800" />
                            <path d="m237.834 96.479h122v107.293h-122z" fill="#fff5f5" />
                            <g>
                                <g>
                                    <g>
                                        <path d="m482.168 503.668h-382.667c-31.296 0-56.667-25.371-56.667-56.667 0-31.296 25.371-56.667 56.667-56.667h382.667z" fill="#f0f5fa" />
                                        <path d="m442.168 390.335h40v113.333h-40z" fill="#e4ecf2" />
                                        <g>
                                            <path d="m502.167 511.168h-402.666c-35.381 0-64.167-28.785-64.167-64.167s28.785-64.167 64.167-64.167h402.667c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-402.667c-27.11 0-49.167 22.056-49.167 49.167 0 27.11 22.056 49.167 49.167 49.167h402.667c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.501 7.5z" fill="#6e9eff" />
                                        </g>
                                        <g>
                                            <g>
                                                <path d="m482.167 435.613h-308.909c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h308.909z" fill="#c5d7e6" />
                                            </g>
                                            <g>
                                                <path d="m482.167 473.391h-226.889c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h226.889z" fill="#c5d7e6" />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path d="m418.028 375.377h-372.353c-20.254 0-36.674-16.419-36.674-36.674 0-20.254 16.419-36.674 36.674-36.674h372.354v73.348z" fill="#f0f5fa" />
                                        <path d="m378.028 302.029h40v73.348h-40z" fill="#e4ecf2" />
                                        <g>
                                            <path d="m440.972 382.877h-395.297c-24.357 0-44.174-19.816-44.174-44.174s19.816-44.174 44.174-44.174h395.297c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-395.297c-16.086 0-29.174 13.087-29.174 29.174s13.087 29.174 29.174 29.174h395.297c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#74d84b" />
                                        </g>
                                        <g>
                                            <g>
                                                <path d="m418.028 347.761h-105.315c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h105.315z" fill="#c5d7e6" />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path d="m133.046 7.5h298.87c22.5 0 40.739 18.24 40.739 40.739 0 22.5-18.24 40.739-40.739 40.739h-298.87z" fill="#f0f5fa" />
                                        <path d="m431.916 7.5h-40c22.5 0 40.739 18.24 40.739 40.739 0 22.5-18.24 40.739-40.739 40.739h40c22.5 0 40.739-18.24 40.739-40.739 0-22.499-18.239-40.739-40.739-40.739z" fill="#e4ecf2" />
                                        <g>
                                            <path d="m431.916 96.479h-324.357c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h324.357c18.328 0 33.239-14.911 33.239-33.239s-14.911-33.24-33.239-33.24h-324.357c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h324.357c26.599 0 48.239 21.64 48.239 48.239s-21.64 48.24-48.239 48.24z" fill="#fc435f" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="m60.099 203.771h445.902v90.758h-445.902z" fill="#6e9eff" />
                                        </g>
                                        <path d="m369.834 203.771h136.167v90.758h-136.167z" fill="#bf6930" />
                                        <path d="m466.001 203.771h40v90.758h-40z" fill="#ad5f2c" />
                                        <path d="m213.501 264.15h-102.009c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15h102.009c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z" fill="#fff5f5" />
                                        <g>
                                            <path d="m462.667 256.65h-48.833c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h48.833c4.142 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#fff5f5" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="m326.167 166.956c-4.142 0-7.5-3.358-7.5-7.5v-18.662c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v18.662c0 4.142-3.357 7.5-7.5 7.5z" fill="#677a8f" />
                                        </g>
                                        <g>
                                            <path d="m298.834 166.956c-4.142 0-7.5-3.358-7.5-7.5v-18.662c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v18.662c0 4.142-3.357 7.5-7.5 7.5z" fill="#677a8f" />
                                        </g>
                                        <g>
                                            <path d="m271.501 166.956c-4.142 0-7.5-3.358-7.5-7.5v-18.662c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v18.662c0 4.142-3.358 7.5-7.5 7.5z" fill="#677a8f" />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path d="m132.834 40.739h171.138c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-171.138z" fill="#c5d7e6" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg style={{ margin: "0px 40px" }} className="book1" height="512" viewBox="0 0 512 512" width="512"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="flat">
                            <path d="m360 488h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16z" fill="#ea9d2d" />
                            <path d="m352 408h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16z" fill="#ea9d2d" />
                            <path d="m280 248h98.264a20 20 0 0 1 10.6 3.04l59.136 36.96-8 32-57.044-32.35-18.956-12.397z" fill="#55300b" />
                            <path d="m348.838 164.744 19.162-28.744 24 40z" fill="#027e2a" />
                            <path d="m328 152 64 24-32 72-64-24z" fill="#02a437" />
                            <path d="m208 192-48 104h32l24-48z" fill="#fdc9a6" />
                            <path d="m192.914 224.686 31.086 23.314 16-24-24-40-8 8z" fill="#2cbff4" />
                            <path d="m112 296h208a48 48 0 0 1 48 48 48 48 0 0 1 -48 48h-208a0 0 0 0 1 0 0v-96a0 0 0 0 1 0 0z" fill="#d32b39" />
                            <rect fill="#fdc9a6" height="80" rx="32" width="64" x="208" y="88" />
                            <path d="m272 112h-48l-16 16-11.631-29.078a22.362 22.362 0 0 1 2.156-20.71 22.363 22.363 0 0 1 25.675-8.812l7.8 2.6 6.274-12.549a23.634 23.634 0 0 1 29.917-11.374 23.635 23.635 0 0 1 13.948 28.437z" fill="#683b0d" />
                            <path d="m224 168-16 24v33.39a28 28 0 0 0 2.956 12.522l29.044 58.088 40-48-16-24-8-56z" fill="#0296e5" />
                            <path d="m232 224 90.325 20.844a17.822 17.822 0 0 0 19.951-9.4 17.825 17.825 0 0 0 -11.253-25.168l-67.023-18.276z" fill="#fdc9a6" />
                            <path d="m264 192-4.326-17.3a19.4 19.4 0 0 0 -18.823-14.7 19.4 19.4 0 0 0 -18.824 24.109l9.973 39.891z" fill="#2cbff4" />
                            <path d="m280 248 86.536 21.634a20 20 0 0 1 13.426 11.28l28.038 63.086-24 24-32-72h-112z" fill="#683b0d" />
                            <path d="m448 288 16-8 24 8-16 40-32-8z" fill="#cbcbcb" />
                            <path d="m408 344 32 16v24l-48 8-8-24z" fill="#cbcbcb" />
                            <path d="m111 312h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16z" fill="#d32b39" />
                            <path d="m128 400h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16z" fill="#d32b39" />
                            <path d="m112 328h208a16 16 0 0 1 16 16 16 16 0 0 1 -16 16h-208z" fill="#cbcbcb" />
                            <path d="m80 392h208a48 48 0 0 1 48 48 48 48 0 0 1 -48 48h-208a0 0 0 0 1 0 0v-96a0 0 0 0 1 0 0z" fill="#ea9d2d" transform="matrix(-1 0 0 -1 416 880)" />
                            <path d="m336 424h-208a16 16 0 0 0 -16 16 16 16 0 0 0 16 16h208z" fill="#cbcbcb" />
                            <path d="m137.373 174.627-1.373 1.373h-48l-1.373-1.373a77.254 77.254 0 0 1 -22.627-54.627 48 48 0 0 1 48-48 48 48 0 0 1 48 48 77.254 77.254 0 0 1 -22.627 54.627z" fill="#ea9d2d" />
                            <path d="m133.657 114.343a8 8 0 0 0 -11.314 0l-10.343 10.344-10.343-10.344a8 8 0 0 0 -11.314 11.314l13.657 13.657v36.686a8 8 0 0 0 16 0v-36.686l13.657-13.657a8 8 0 0 0 0-11.314z" fill="#c38325" />
                            <g fill="#fbb540">
                                <path d="m112 48a8 8 0 0 1 -8-8v-16a8 8 0 0 1 16 0v16a8 8 0 0 1 -8 8z" />
                                <path d="m76.008 57.647a8 8 0 0 1 -6.936-4l-8-13.856a8 8 0 1 1 13.856-8l8 13.856a8 8 0 0 1 -6.92 12z" />
                                <path d="m49.639 84a7.957 7.957 0 0 1 -3.993-1.073l-13.856-8a8 8 0 0 1 8-13.856l13.856 8a8 8 0 0 1 -4.007 14.929z" />
                                <path d="m40 120h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
                                <path d="m35.8 164a8 8 0 0 1 -4.008-14.929l13.856-8a8 8 0 0 1 8 13.856l-13.856 8a7.969 7.969 0 0 1 -3.992 1.073z" />
                                <path d="m147.992 57.647a8 8 0 0 1 -6.92-12l8-13.856a8 8 0 1 1 13.856 8l-8 13.856a8 8 0 0 1 -6.936 4z" />
                            </g>
                            <path d="m136 208-16 16h-16l-16-16v-32h48z" fill="#cbcbcb" />
                            <path d="m88 208h48l-16 16h-16z" fill="#eaeae8" />
                        </g>
                    </svg>
                </div>
            </div>



            <div className="block-content" style={{ padding: "40px 0px" }}>
                <div className="outer-section-title" style={{ textAlign: "left" }}>
                    <h2 className="section-title">Discover interesting books</h2>
                </div>
                <div className="flex-how" style={{ display: "flex", justifyContent: "space-evently" }}>
                    <div style={{ letterSpacing: "0.01rem", lineHeight: "1.6" }}>
                        <p>Get your very own recommendations from a large database. It's simple: you choose one book that you like,
                           and we will show you books that you're likely to enjoy aswell.</p>
                    </div>
                    <div className="icon-how">
                        <Book1 />
                    </div>
                </div>
            </div>


            <div className="block-content">
                <div className="outer-section-title" style={{ width: "fit-content", borderBottom: "2px solid lightgrey" }}>
                    <h2 className="section title">
                        How it works
                    </h2>
                </div>
                <div>
                    <p style={{ textAlign:"left", letterSpacing: "0.01rem", lineHeight: "1.6", marginTop: "30px" }}>
                        Our book recommendation system is based on the analysis of book ratings made by various users. 
                    </p>
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
                                <Rating className="icon-data"/>
                            </div>
                            <div className="data">1.149.780 ratings</div>
                        </div>
                    </div>

                </div>
                <Link to="/recomendation" className="custom-btn btn-type1 type1">
                        Get your recomendations
                        </Link>
            </div>

            {/* </div> */}

        </div>
    );
};

export default Home;