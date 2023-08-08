import React from 'react';
import styles from '../styles/Button.module.css';

function Button ({link, name, color}) {
    const style = {
        textDecoration: 'none',
        color: color,
        cursor: 'pointer'
    };
    return (
        <span style={style}>{name}</span>
    );
}

export default Button;