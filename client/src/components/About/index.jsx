import "./about.sass";
import MemberCard from './MemberCard';

export const About = () => {

    const members = [
        { member: "erix", extension: "png", fullname: "Erix Mamani Villacresis", title: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/erixmamani/", email: "erixmv022@gmail.com" },
        { member: "vladimir", extension: "jfif", fullname: "Vladimir Smirnov", title: "Data Scientist", linkedin: "https://www.linkedin.com/in/vladismirn/", email: "vsmirn00@gmail.com" },
        { member: "adelina", extension: "jpeg", fullname: "Adelina Muntean", title: "Junior Web Developer", linkedin: "https://www.linkedin.com/in/adelina-muntean/", email: "adelina.muntean97@gmail.com" }
    ];

    const renderMembers = ({ member, extension, fullname, title, linkedin, email }, i) =>
        <MemberCard key={member} member={member} extension={extension} fullname={fullname} title={title} linkedin={linkedin} email={email} />

    return (
        <main id="about" className="section">
            <div className="block-content w-65 our-values">
                <div className="section-title-container">
                    <h2 className="section-title">Our values</h2>
                </div>
                <div>
                    <div className="socrates">
                        <div className="image">
                            <img className="socrates-img" src="/images/about/socrates.jpg" alt="" />
                        </div>
                        <div className="quote">
                            <p><q><i>Εν μόνον αγαθόν είναι, την επιστήμην, και εν μόνον κακόν, την αμαθίαν</i></q></p>
                            <p><q><i>There is only one good, knowledge, and one evil, ignorance</i></q></p>
                            <p className="socrates-credits">Sócrates, 469 - 399 BC, Ancient Greek Philosopher</p>
                        </div>
                    </div>
                    <div className="ideology">
                        <span className="ideal"><b>We stand for a reading society. We stand for a society of values.</b></span>
                        <br />
                        <p>From our perspective, we strongly believe that knowledge can add value not only to the individual mind but also to the whole civilization. Our project is related not only to our recommendation system but also to the values we want to share with the world.</p>
                        <p>Reading boosts memory, cognitive processes, focus and communication skills. Spending one hour a day reading is a small step of effort which brings a giant step of positive consequences. The wisest people on earth used to read. We lost contact with this ancestral technology called books. We are used to easy and fast information which makes our memory superficial. But what happened to our deep learning?</p>
                        <br />
                        <p>From The Black Swan we stand for the idea that we don’t need to relinquish from new technologies but combine them with our traditional technologies of knowledge.  Thus we will develop our full potential as humans and as society.</p>
                        {/* <p>Our goal is to encourage people to regain or acquire the habit of active reading. </p> */}
                    </div>
                </div>
            </div>
            <div className="block-content w-65 our-team">
                <div className="section-title-container">
                    <h2 className="section-title">Our Team</h2>
                </div>
                <div className="members">
                    {members.map(renderMembers)}
                </div>
            </div>
        </main>
    );
};