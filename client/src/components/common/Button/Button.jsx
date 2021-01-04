import "./button.sass";
import { Link } from 'react-router-dom';

export const Button = props => {

    const { to, text, onClick } = props;

    return (
        <Link to={to} onClick={onClick || ""} className="custom-btn btn-type1 type1">{text}</Link>
    );
}