import "./about.css"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';
import MemberCard from "./MemberCard"

const About = () => {

    const members = [
        {member: "erix", extension:"png", fullname: "Erix Mamani Villacresis", title: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/erixmamani/", email: "erixmv022@gmail.com"},
        {member: "vladimir", extension:"jfif", fullname: "Vladimir Smirnov", title: "Data Scientist", linkedin: "https://www.linkedin.com/in/erixmamani/", email: "erixmv022@gmail.com"},
        {member: "adelina", extension:"jpeg", fullname: "Adelina Muntean", title: "Junior Web Developer", linkedin: "https://www.linkedin.com/in/erixmamani/", email: "erixmv022@gmail.com"}
    ]

    const CardButton = styled.a`

    `;

    return (
        <div className="section about">
            <div className="title">
                <h1>The Black Swan Team</h1>
            </div>
            <div className="block-content">
                <div>
                    <h2>Our values</h2>
                </div>
                <div className="ideology">
                    <div className="socrates">
                        <div className="socrates-img">
                            <img src="/images/about/socrates.jpg" alt="" />
                        </div>
                        <div>
                            <p><q><i>Εν μόνον αγαθόν είναι, την επιστήμην, και εν μόνον κακόν, την αμαθίαν</i></q></p>
                            <p><q><i>There is only one good, knowledge, and one evil, ignorance</i></q></p>
                            <p className="socrates-credits">Sócrates, 469 - 399 BC, Ancient Greek Philosopher</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p>Globalization and the ease of access to the Internet have meant that information is always accessible and, consequently, is less valued.</p>
                    <br />
                    <p>We believe that a society that reads is not only more cultured, it is also more prone to act with kindness.</p>
                    {/* <p>Our goal is to encourage people to regain or acquire the habit of active reading. </p> */}
                </div>
            </div>
            <div className="section content">
                <div className="block-content">
                    <div>
                        <h2>Our Team</h2>
                    </div>
                    <div className="members">
                        <MemberCard member="erix" extension="png" fullname="Erix Mamani Villacresis" title="Full Stack Developer" linkedin="https://www.linkedin.com/in/erixmamani/" email="erixmv022@gmail.com" />
                        <Card variant="outlined">
                            <CardContent>
                                <div className="photo">
                                    <img className="member-photo" src="/images/about/profiles/erix.png" alt="" />
                                </div>
                                <div className="member-name">
                                    <b>Erix Mamani Villacresis</b>
                                    <p>Full Stack Developer</p>
                                </div>
                            </CardContent>
                            <CardActions>
                                <div className="buttons">
                                    <CardButton target="_BLANC" href="https://www.linkedin.com/in/erixmamani/"><img className="member-icon" src="/images/about/icons/linkedin.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                                    <CardButton target="_BLANC" href="mailto:erixmv022@gmail.com"><img className="member-icon" src="/images/about/icons/email.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                                </div>
                            </CardActions>
                        </Card>
                        <Card variant="outlined">
                            <CardContent>
                                <div className="photo">
                                    <img className="member-photo" src="/images/about/profiles/vladimir.jfif" alt="" />
                                </div>
                                <div className="member-name">
                                    <b>Vladimir Smirnov</b>
                                    <p>Data Scientist</p>
                                </div>
                            </CardContent>
                            <CardActions>
                                <div className="buttons">
                                    <CardButton target="_BLANC" href="https://www.linkedin.com/in/vladismirn/"><img className="member-icon" src="/images/about/icons/linkedin.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                                    <CardButton target="_BLANC" href="mailto:vsmirn00@gmail.com"><img className="member-icon" src="/images/about/icons/email.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                                </div>
                            </CardActions>
                        </Card>
                        <Card variant="outlined">
                            <CardContent>
                                <div className="photo">
                                    <img className="member-photo" src="/images/about/profiles/adelina.jpeg" width="" height="" alt="" />
                                </div>
                                <div className="member-name">
                                    <b>Adelina Muntean</b>
                                    <p>Junior Web Developer</p>
                                </div>
                            </CardContent>
                            <CardActions>
                                <div className="buttons">
                                    <CardButton target="_BLANC" href="https://www.linkedin.com/in/adelina-muntean/"><img className="member-icon" src="/images/about/icons/linkedin.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                                    <CardButton target="_BLANC" href="mailto:adelina.muntean97@gmail.com"><img className="member-icon" src="/images/about/icons/email.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About