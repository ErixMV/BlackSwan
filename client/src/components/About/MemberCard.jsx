import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const MemberCard = ({member, extension, fullname, title, linkedin, email}) => {

    const profilePath = "/images/about/profiles/";

    return (
        <Card variant="outlined" >
            <CardContent>
                <div className="photo">
                    <img className="member-photo" src={`${profilePath}${member}.${extension}`} alt="Member profile" />
                </div>
                <div className="member-name">
                    <b className="name">{fullname}</b>
                    <p>{title}</p>
                </div>
            </CardContent>
            <CardActions>
                <div className="buttons">
                    <a target="_BLANC" href={linkedin}><img className="member-icon" src="/images/about/icons/linkedin.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></a>
                    <a target="_BLANC" href={`mailto: ${email}`}><img className="member-icon" src="/images/about/icons/email.svg" alt="Author: https://www.flaticon.es/autores/pixel-buddha" /></a>
                </div>
            </CardActions>
        </Card>
    );
}

export default MemberCard