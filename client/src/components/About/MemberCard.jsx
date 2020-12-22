import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styled from "styled-components"

const MemberCard = ({member, extension, fullname, title, linkedin, email}) => {

    const CardButton = styled.a`

    `

    const profilePath = "/images/about/profiles/";

    return (
        <Card variant="outlined">
            <CardContent>
                <div className="photo">
                    <img className="member-photo" src={`${profilePath}${member}.${extension}`} alt="Member profile" />
                </div>
                <div className="member-name">
                    <b>{fullname}</b>
                    <p>{title}</p>
                </div>
            </CardContent>
            <CardActions>
                <div className="buttons">
                    <CardButton target="_BLANC" href={linkedin}><img className="member-icon" src="/images/about/icons/linkedin.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                    <CardButton target="_BLANC" href={`mailto: ${email}`}><img className="member-icon" src="/images/about/icons/email.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></CardButton>
                </div>
            </CardActions>
        </Card>
    );
}

export default MemberCard