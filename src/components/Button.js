import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

function Button ({link, name, color}) {
    const style = {
        color: color
    }
    return (
        <span><Link to={link} style={style}>{name}</Link></span>
    );
}

export default Button;