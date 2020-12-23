import Media from 'react-media';
import "./about.css"

import MemberCard from "./MemberCard";

const About = () => {

    const members = [
        { member: "erix", extension: "png", fullname: "Erix Mamani Villacresis", title: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/erixmamani/", email: "erixmv022@gmail.com" },
        { member: "vladimir", extension: "jfif", fullname: "Vladimir Smirnov", title: "Data Scientist", linkedin: "https://www.linkedin.com/in/vladismirn/", email: "vsmirn00@gmail.com" },
        { member: "adelina", extension: "jpeg", fullname: "Adelina Muntean", title: "Junior Web Developer", linkedin: "https://www.linkedin.com/in/adelina-muntean/", email: "adelina.muntean97@gmail.com" }
    ]

    const renderMembers = ({ member, extension, fullname, title, linkedin, email }, i) =>
        <MemberCard key={member} member={member} extension={extension} fullname={fullname} title={title} linkedin={linkedin} email={email} />


    return (
        <div className="section about">
            <div className="title">
                <h1>The Black Swan Team</h1>
            </div>
            <div className="block-content">
                <div>
                    <h2>Our values</h2>
                </div>
                <hr />
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
                        <h2 className="section-title">Our Team</h2>
                    </div>
                    <hr />
                    <div className="members">
                        {members.map(renderMembers)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About