import { useEffect, useRef } from 'react';
import styles from '../styles/Cover.module.css';

function Cover() {
    const target = useRef();

    return (
        <div className={styles.container}>
            <h3 className={styles.title} ref={target}>PREPARE SOCIAL HACKATHON</h3>
            <span>24-25 AUGUST 2023</span>
            <button className={styles.btn}>VIEW MORE</button>
        </div>
    );
}

export default Cover;